const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const env = require('../config/.env');
const passport = require("passport")
const auth = passport.authenticate("jwt", {session:false});
const stripe = require('stripe')("sk_test_mDc7apmGEPPD3kEuFbKwZESX00KFa5TFP6")
const moment = require("moment")

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

router.get(`/get_stores_brand_rn/:url`, async (req, res)=>{

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

router.get("/get_nome_produtos/:idCat", async (req,res)=>{

    
    const query = `select * from produto where pro_id_categoria = ${req.params.idCat}`;
    
    const client = mysql.createConnection(env);

    client.query(query, (err, result)=>{
        if(err) throw err;

       // console.log(result);

        client.end();
        console.log(query)
        return res.status(200).json(result)
    })


})

router.get("/comparar_precos/:idProduto/:filtro", async (req,res)=>{

    
    const query = `
        select * from item
        inner join produto on it_id_produto = pro_id_produto
        inner join mercado on it_id_mercado = mer_id_mercado
        where pro_id_produto = ${req.params.idProduto}
        order by it_preco ${req.params.filtro}
    `;

    console.log(query)
    
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
        inner join mercado on it_id_mercado = mer_id_mercado
        inner join produto on it_id_produto = pro_id_produto
        inner join categoria on pro_id_categoria = cat_id_categoria
        where 
        mer_id_mercado = ${idMercado} and
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

    const client = await mysql.createConnection(env)
    
    const query = await `INSERT INTO shopping(sh_it, sh_id_usu, sh_id_compras, sh_preco) VALUES(${req.body.idItem}, ${req.body.idUsuario}, '${req.body.idComprar}', ${req.body.preco})`;
    
    const query2  = await `
    select sh_it, it_preco, count(*) as qtd
    from shopping 
    inner join item on item_id = sh_it
    where 
    sh_id_compras = '${req.body.idComprar}' AND
    sh_id_usu = ${req.body.idUsuario}
    group by sh_it
    `;
    
    await client.query(query, (err, result)=>{
        if (err) throw err
    }) 
    
    await client.query(query2, (err, result)=>{
        if (err) throw err
        client.end();
        console.log(result)
        return res.status(200).json(result)
    })  


})

router.post("/del_cart", async (req, res)=>{
    console.log(req.body)

     const client = mysql.createConnection(env)
    
    const query = `
        delete from shopping 
        where 
        sh_id_usu  = ${req.body.idUsuario} and 
        sh_it = ${req.body.idItem}  and 
        sh_id_compras = '${req.body.idComprar}'
        limit 1
    `;

    const query2  = await `
    select sh_it, it_preco, count(*) as qtd
    from shopping
    inner join item on item_id = sh_it 
    where 
    sh_id_compras = '${req.body.idComprar}' AND
    sh_id_usu = ${req.body.idUsuario}
    group by sh_it
    `;
    
     await client.query(query, async (err, result)=>{

         if (err) throw err
    
    })

    await client.query(query2, (err, result)=>{
        if (err) throw err

        console.log(result)
        client.end();

        return res.status(200).json(result)
    })  
})

router.get("/get_mercados", async (req, res)=>{

    const client = await mysql.createConnection(env)
    const query = "SELECT * FROM mercado ORDER BY mer_nome"
    
    client.query(query, (err, result)=>{
        if (err) throw err
        console.log(result)
        client.end();

        return res.status(200).json(result)
    })
})

router.get("/get_entregadores", async (req, res)=>{

    const client = await mysql.createConnection(env)
    const query = `
        select * from entregador
        inner join usuario on ent_id_usu = usu_id_usu
        inner join endereco on en_id_endereco = usu_id_endereco
        where ent_ativo = 0;
    `;

    client.query(query, (err, result)=>{
        if(err) throw err

        client.end();
        return res.status(200).json(result)
    })

})

router.post("/checkout", async (req,res)=>{
    console.log(req.body)
    let error;
    let status;

    try
    {
        const {token, product} = req.body;

        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        })

        const charge = await stripe.charges.create({
            amount:product.price * 100,
            currency:"usd",
            customer:customer.id,
            receipt_email:token.email,
            description:`Purshed the ${product.name}`,
            shipping:{
                name:token.card.name,
                address:{
                    line1:token.card.address_line1,
                    line2:token.card.address_line2,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    postal_code:token.card.address_zip
                }
            },
        })

        console.log(123)

         return res.status(200).json("success")
    }

    catch(err)
    {
        console.log(err)
         status = "failure"
    }

})

router.get("/qtd_item/:idComprar/:idUsuario", async (req, res)=>{

    const client = mysql.createConnection(env)

    const query  = await `
    select sh_it, it_preco, count(*) as qtd
    from shopping 
    inner join item on item_id = sh_it
    where 
    sh_id_compras = '${req.params.idComprar}' AND
    sh_id_usu = ${req.params.idUsuario}
    group by sh_it
    `; 
    
    await client.query(query, (err, result)=>{
        if (err) throw err
        client.end();
        console.log(result)
        return res.status(200).json(result)
    })  
})

router.post("/post_compras/:idComprar", async (req, res)=>{

    console.log(req.body)
    console.log(req.params)
    const client = mysql.createConnection(env)
    let query = "";

    req.body.map(res=>{
        query = `
        INSERT INTO compras(data_comprado, comp_id_usu, comp_item_id, comp_id_compras, comp_qtd, comp_id_ent, preco) 
        VALUES('${res.data}', ${res.idUsuario}, ${res.idItem}, '${res.idCompras}', ${res.qtd}, ${res.idEntregador}, ${res.preco})
        `;

     client.query(query, (err, result)=>{
           //if(err) throw err;
           // client.end();
        })
    })


    const query2 = await `SELECT * FROM compras WHERE comp_id_compras = '${req.params.idComprar}'`;

    client.query(query2, (err, result)=>{
        if(err) throw err;

        client.end();
        console.log(result)
        return res.status(200).json(result)
    })

    
    // client.end();
    // return res.status(200).json("Passed")


})

router.get('/nota_fiscal/:idComprar/:idEntregador', async (req,res)=>{

    console.log(moment(new Date()).format("YYYY-MM-DD HH:MM"))
    const client = mysql.createConnection(env)

    const query = `
        Update shopping 
        SET 
        sh_data = '${moment(new Date()).format("YYYY-MM-DD HH:MM")}', 
        sh_entregador_id = ${req.params.idEntregador}
        WHERE 
        sh_id_compras = '${req.params.idComprar}'
        `;

    console.log(query)

    client.query(query, (err, result)=>{
        if(err) throw err;

        //client.end();
    })

    //const query2 = `SELECT * FROM shopping WHERE sh_id_compras = '${req.params.idComprar}'`;

    const query2 = `
    select 
    sh_it, sh_preco, sh_id_compras, primeiro_nome, sobre_nome, it_nome, sh_data,
    mer_nome, en_cep, en_cidade, en_estado, en_rua, en_numero, en_complemento, count(*) as qtd
    from shopping 
    inner join item on sh_it = item_id
    inner join mercado on it_id_mercado = mer_id_mercado
    inner join entregador on ent_id = sh_entregador_id
    inner join usuario on ent_id_usu = usu_id_usu
    inner join mercado_info on mer_info_id = mer_id_mercado
    inner join endereco on en_id_endereco = mer_info_id_endereco
    WHERE sh_id_compras = '${req.params.idComprar}' 
    group by sh_it
    `;

    client.query(query2, (err,result)=>{
        if(err) throw err;
        client.end();
        console.log(query2)
        console.log(result)
        return res.status(200).json(result)
    })
})

router.get(`/get_favoritos/:idUsuario`, async (req, res)=>{
    const client = await mysql.createConnection(env);

    const query = `
        SELECT * FROM favoritos where fav_id_usu = ${req.params.idUsuario}
    `;
    console.log(query)
    client.query(query, (err, result)=>{
        if (err) throw err;

        client.end();
        console.log(result)
        return res.status(200).json(result)
    })
})

router.post(`/favoritos`, async (req, res)=>{
    console.log(req.body)
    const client = await mysql.createConnection(env);

    const query = `
        INSERT INTO favoritos(fav_id_usu, fav_id_item) values(${req.body.idUsuario}, ${req.body.idItem})
    `;
    console.log(query)
    client.query(query, (err, result)=>{
        if (err) throw err;

        client.end();
        console.log("ok")
        return res.status(200).json("ok")
    })
})

router.post(`/del_favoritos`, async (req, res)=>{
    console.log(req.body)
    const client = await mysql.createConnection(env);

    const query = `
        delete from favoritos where fav_id_usu = ${req.body.idUsuario} and fav_id_item = ${req.body.idItem}
    `;
    console.log(query)
    client.query(query, (err, result)=>{
        if (err) throw err;

        client.end();
        console.log("ok")
        return res.status(200).json("ok")
    })
})

    router.get(`/get_favoritos_pagina/:idUsuario/:filtro`, async (req,res)=>{
        console.log(req.params)

        const client = await mysql.createConnection(env);

        const query = `
            select * from favoritos
            inner join item on item_id = fav_id_item
            inner join mercado on it_id_mercado = mer_id_mercado
            where fav_id_usu = ${req.params.idUsuario}
            order by it_preco ${req.params.filtro}
        `;
        console.log(query)
        client.query(query, (err, result)=>{
            if (err) throw err;

            client.end();
            console.log(result)
            return res.status(200).json(result)
        })
    })


    router.get(`/get_promocoes`, async (req,res)=>{
        console.log(req.params)

        const client = await mysql.createConnection(env);

        const query = ` select * from item where promocao = 1`;
        console.log(query)
        client.query(query, (err, result)=>{
            if (err) throw err;

            client.end();
            console.log(result)
            return res.status(200).json(result)
        })
    })

    router.post(`/add_promocao`, async (req,res)=>{
        console.log(req.body)

        const client = await mysql.createConnection(env);

        const query = `UPDATE item SET promocao = 1 where item_id = ${req.body.idProduto}`;
        console.log(query)
        client.query(query, (err, result)=>{
            if (err) throw err;

            client.end();
            console.log(result)
            return res.status(200).json(result)
        })
    })




module.exports = router;