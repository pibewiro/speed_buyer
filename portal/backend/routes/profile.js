const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const env = require('../config/.env');
const passport = require("passport")
const auth = passport.authenticate("jwt", {session:false});
const validateProfile = require("../validations/validateProfile")
const validatePJ = require("../validations/validatePessoaJ");


router.post("/post_pessoa_fisica", async (req,response)=> {

    const {errors, isValid} = validateProfile(req.body);

    if(!isValid) return response.status(400).json(errors)

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

router.post("/post_pessoa_juridica", async (req,response)=>{

    const {errors, isValid} = validatePJ(req.body);

    if(!isValid) return response.status(400).json(errors)

    const client = mysql.createConnection(env)

    const queryEndereco = `
    INSERT INTO endereco(en_cep, en_cidade, en_estado, en_rua, en_numero, en_complemento)
    VALUES('${req.body.cep}', '${req.body.cidade}', '${req.body.estado}', '${req.body.rua}', '${req.body.numero}', '${req.body.complemento}')
    `;

    const queryInsertPJ = `
        INSERT INTO usuario_juridico(uj_cnpj, uj_nome_fantasia, uj_razao_social, uj_inscricao_estadual, uju_id_usuario, uj_inscricao_municipal)
        VALUES('${req.body.cnpj}', '${req.body.nomeFantasia}', '${req.body.razaoSocial}', '${req.body.inscricaoEst}', ${req.body.idUsuario}, '${req.body.inscricaoMun}')
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
    })

    await client.query(queryInsertPJ, (err, result)=>{
        if(err) throw err
    })

    await client.query(getIDEndereco, (err, result)=>{
        if(err) throw err

        const idEndereco = result[0].en_id_endereco;

        const queryUsuario = `
        UPDATE usuario SET 
        usu_ativo = 2, 
        usu_id_endereco = ${idEndereco} 
        WHERE  usu_id_usu = ${req.body.idUsuario}
       `;

        client.query(queryUsuario, (err, result)=>{
            if(err) throw err;
            client.end();
            response.status(200).json("Success");
        })
    })
})

router.get("/get_ativo/:id", async (req,response)=>{

    const client = mysql.createConnection(env);

    const query = `SELECT usu_ativo FROM usuario WHERE usu_id_usu = ${req.params.id}`;
    await client.query(query, (err, result)=>{

        if(err) throw err;
        client.end();
        return response.status(200).json(result[0].usu_ativo)
    })
})

router.get("/get_pessoa_juridico/:id", async (req, response)=>{

    const client = await mysql.createConnection(env)

    const query = `
    SELECT * 
    FROM endereco
    INNER JOIN usuario ON usu_id_endereco = en_id_endereco
    INNER JOIN usuario_juridico ON uju_id_usuario = usu_id_usu
    WHERE usu_id_usu = ${req.params.id}
    `;
    console.log(query);

    client.query(query, (err, result)=>{

        if(err) throw err
        client.end();
        return response.status(200).json(result[0])
    })
})

router.post("/update_pessoa_juridica", async (req,response)=>{
    console.log(req.body)
})


module.exports = router;