const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const env = require('../config/.env');
const passport = require("passport")
const auth = passport.authenticate("jwt", {session:false});
const validateProfile = require("../validations/validateProfile")

router.post("/post_pessoa_fisica", async (req,response)=> {

    const {errors, isValid} = validateProfile(req.body);

    if(!isValid) return response.status(400).json(errors)

    console.log(req.body);

    const client = mysql.createConnection(env)

    const queryEndereco = `
        INSERT INTO endereco(en_cep, en_cidade, en_estado, en_rua, en_numero, en_complemento)
        VALUES('${req.body.cep}', '${req.body.cidade}', '${req.body.estado}', '${req.body.rua}', '${req.body.numero}', '${req.body.complemento}')
    `;

    const queryUF = `
        INSERT INTO usuario_fisico(uf_cpf, uf_data_nascimento, uf_id_usu)
        VALUES('${req.body.cpf}', '${req.body.dataNascimento}', ${req.body.idUsuario})
    `;

    const getIDEndereco = `
        SELECT en_id_endereco from endereco 
        WHERE
        en_cep = '${req.body.cep}' AND 
        en_cidade = '${req.body.cidade}' AND 
        en_estado = '${req.body.estado}' AND 
        en_rua = '${req.body.rua}' AND 
        en_numero = '${req.body.numero}' AND 
        en_complemento = '${req.body.complemento}' 
    `;



     await client.query(queryEndereco, (err, result)=>{

        if(err) throw err
        console.log(result)
     })

     await client.query(queryUF, (err, result)=>{

        if(err) throw err
        console.log(result)
     })

     await client.query(getIDEndereco, (err, result)=>{

        if(err) throw err

        console.log("Get id end", result[0].en_id_endereco);
        const idEndereco = result[0].en_id_endereco;
        
        const queryUsuario = `
            UPDATE usuario SET 
            usu_ativo = 1, 
            usu_id_endereco = ${idEndereco} 
            WHERE  usu_id_usu = ${req.body.idUsuario}
        `;

        client.query(queryUsuario, (err, result)=>{
            if(err) throw err;

            console.log("User updated");
            client.end();
            return response.status(200).json("Success");
        });
     });
     
})


module.exports = router;