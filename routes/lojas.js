const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const env = require('../config/.env');
const passport = require("passport")
const auth = passport.authenticate("jwt", {session:false});

router.get(`/get_stores_brand/:url`, async (req, res)=>{

    const client = await mysql.createConnection(env);

    const query = `
        SELECT * FROM mercado_info
        INNER JOIN mercado ON mer_id_mercado = mer_info_id_mer
        INNER JOIN endereco ON en_id_endereco = mer_info_id_endereco
        WHERE mer_url = '${req.params.url}'
        ORDER BY mer_nome ASC
    `;

    client.query(query, (err, result)=>{
        if (err) throw err;

        client.end();
        return res.status(200).json(result)
    })
})

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
        console.log(result)
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

router.post("/get_items", async (req,res)=>{

    console.log(req.body);
    const {idMercado, categoria} = req.body;

    const query = `
        select * from item
        inner join mercado_info on it_id_mercado = mer_info_id
        inner join produto on it_id_produto = pro_id_produto
        inner join categoria on pro_id_categoria = cat_id_categoria
        where 
        it_id_mercado = ${parseInt(idMercado)} and
        cat_nome = '${categoria}'
    `;

    const client = mysql.createConnection(env);

    client.query(query, (err, result)=>{
        if (err) throw err;
        console.log(query)
        console.log(result)
        client.end();
        return res.status(200).json(result)
    })
})

router.post("/add_cart", async (req, res)=>{
    console.log(req.body)

    // const client = await mysql.createConnection(env)
    
    // const query = await `INSERT INTO shopping(sh_it, sh_id_usu) VALUES(${req.body.idItem}, ${req.body.idUsuario})`;
    
    // await client.query(query, (err, result)=>{
    //     if (err) throw err
    // })

    // client.end();

})

router.post("/del_cart", async (req, res)=>{
    console.log(req.body)

    const client = mysql.createConnection(env)
    
    const query = `
        SELECT *  
        FROM shopping
        WHERE sh_it = ${req.body.idItem} AND sh_id_usu = ${req.body.idUsuario}
        ORDER BY sh_id DESC
        LIMIT 1
    `;
    
    await client.query(query, async (err, result)=>{

        if (err) throw err
        
        const queryDel = `
            DELETE FROM shopping WHERE sh_id = ${result[0].sh_id}
        `;

        await client.query(queryDel, (err, result)=>{
            if(err) throw err
        })

        client.end();
    })
})

router.get("/get_mercados", async (req, res)=>{

    const client = await mysql.createConnection(env)
    const query = "SELECT * FROM mercado"
    
    client.query(query, (err, result)=>{
        if (err) throw err
        console.log(result)
        client.end();

        return res.status(200).json(result)
    })
})





module.exports = router;