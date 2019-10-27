const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const env = require('../config/.env');
const passport = require("passport")
const auth = passport.authenticate("jwt", {session:false});

router.get("/get_stores", async (req, response)=>{

    const client = await mysql.createConnection(env)

    const query = `
    SELECT * FROM mercado_info
    INNER JOIN mercado ON mer_id_mercado = mer_info_id_mer
    INNER JOIN endereco ON en_id_endereco = mer_info_id_endereco
    ORDER BY mer_nome ASC
    `;

    client.query(query, (err, result)=>{
        if(err) throw err;
        // console.log(result)
        client.end();
        return response.status(200).json({result})
    })
})

router.get("/get_categorias", async (req,res)=>{

    
    const query = 'SELECT * FROM categoria';
    
    const client = mysql.createConnection(env);

    client.query(query, (err, result)=>{
        if(err) throw err;

       // console.log(result);

        client.end();
        return res.status(200).json(result)
    })


})



module.exports = router;