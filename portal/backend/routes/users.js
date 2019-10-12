const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const env = require('../config/.env');
const validateSignUp = require("../validations/validateSignUp");
const validateSignIn = require("../validations/validateSignIn");
const {secretOrKey} = require("../config/keys");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport")
const auth = passport.authenticate('jwt', { session:false});

router.post("/new_user", (req,response)=>{

    const {isValid, errors} = validateSignUp(req.body);

    if(!isValid) return response.status(400).json(errors)

    const client =  mysql.createConnection(env);

        const {email, senha, primeiroNome, sobreNome, usuario} = req.body;
        let senhaHashed = "";
        
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(senha, salt, async (err,hash)=>{

                senhaHashed = hash;

                let query = `
                INSERT INTO usuario(usu_email, usu_senha, primeiro_nome, sobre_nome, nome_usuario, usu_ativo)
                VALUES('${email}', '${senhaHashed}', '${primeiroNome}', '${sobreNome}', '${usuario}', 0);
            `;

                const res = await client.query(query, (err,result)=>{
                    if(err) throw err;

                    console.log(result, query)
                    client.end();
                });
                return response.status(200).json("Success")
            })
        })
    })


router.post("/login_user", async (req,response)=>{

    const {isValid, errors} = validateSignIn(req.body);

    if(!isValid) return response.status(400).json(errors)

    const client = await mysql.createConnection(env);

  
        const findUser = `SELECT * FROM usuario WHERE usu_email = '${req.body.email}'`;
        let senhaLogin = "";

            const res1 = await client.query(findUser, (err,result)=>{
            if(err) throw err;
            console.log(result)
            client.end();

            if(result.length > 0)
            {
                senhaLogin = result[0].usu_senha;
                console.log(senhaLogin)
            }

            if(result.length === 0)
            {
                return response.status(404).json({email:"User not found"})
            }
    
            bcrypt.compare(req.body.senha, senhaLogin)
            .then(isMatch=>{
                if(isMatch){
    
                    const payload = {
                        id_usuario:result[0].usu_id_usu,
                        nome_usuario:result[0].nome_usuario,
                        email:result[0].usu_email,
                        primeiroNome:result[0].primeiro_nome,
                        sobreNome:result[0].sobre_nome
                    }
    
                    jwt.sign(payload, secretOrKey, {expiresIn:3600}, (err,token)=>{
                        
                       return response.status(200).json({token:`Bearer ${token}`});
                    })
                } 
                else
                {
                    return response.status(404).json({senha:"Incorrect Password"})
                }
            });
    
        });
})

router.get("/current", auth, (req,res)=>{
    console.log("JWT INFO", req.user)
    res.send(req.user)
})



module.exports = router;