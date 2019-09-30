const express = require("express");
const router = express.Router();
const { Pool } = require('pg');
const env = require('../config/.env');
const pool = new Pool(env);
const validateSignUp = require("../validations/validateSignUp");
const validateSignIn = require("../validations/validateSignIn");
const {secretOrKey} = require("../config/keys");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport")

router.post("/new_user", async (req,response)=>{

    const {isValid, errors} = validateSignUp(req.body);

    if(!isValid) return response.status(400).json(errors)

    const client = await pool.connect();

    try
    {
        const {email, senha, primeiroNome, sobreNome, usuario} = req.body;
        let senhaHashed = "";

        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(senha, salt, async (err,hash)=>{
                if(err) throw err;

                senhaHashed = hash;

                let query = `
                INSERT INTO usuario(usu_email, usu_senha, primeiro_nome, sobre_nome, nome_usuario, usu_ativo)
                VALUES('${email}', '${senhaHashed}', '${primeiroNome}', '${sobreNome}', '${usuario}', 0);
            `;

                const res = await client.query(query);
                console.log(query)
                response.status(200).json("Success")
            })
        })
    }

    catch(err)
    {
        console.log(err)
    }

    finally
    {
        client.release();
    }
})

router.post("/login_user", async (req,response)=>{

    const {isValid, errors} = validateSignIn(req.body);

    if(!isValid) return response.status(400).json(errors)

    const client = await pool.connect();

    try
    {
        const findUser = `SELECT * FROM usuario WHERE usu_email = '${req.body.email}'`;
        const res = await client.query(findUser);
        const senhaLogin = res.rows[0].usu_senha;
        if(res.rowCount === 0)
        {
            return response.status(404).json({email:"User not found"})
        }


        bcrypt.compare(req.body.senha, senhaLogin)
        .then(isMatch=>{
            if(isMatch){

                const payload = {
                    id_usuario:res.rows[0].usu_id,
                    nome_usuario:res.rows[0].nome_usuario,
                    email:res.rows[0].usu_email,
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
    }

    catch(err)
    {
        console.log(err)
    }

    finally
    {
        client.release();
    }
})

// router.get("/current", passport.authenticate("jwt", {session:false}), (req,res)=>{
//     console.log("JWT INFO",req.user)
//     res.json(req.user)
// })



module.exports = router;