const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const env = require('../config/.env');
const passport = require("passport")
const auth = passport.authenticate("jwt", {session:false});
const {join} = require("path");
const Formidable = require("formidable")
const bluebird = require("bluebird")
const fs = bluebird.promisifyAll(require('fs'))
const app = express();
const validateNewStore = require("../validations/validateNewStore")
const validateAddStore = require("../validations/validateAddStore")
const validateNovoProduto = require("../validations/validateNovoProduto")
const validateAddItem = require("../validations/validateAddItems")

function checkFileType(file)
{
    const type = file.type.split("/").pop();
    const validTypes = ['png', 'jpeg', 'jpg', 'gif']
    if(validTypes.indexOf(type) === -1)
    {
        console.log("Invalid File type")
        return false
    }

    return true
}

router.post("/upload", async (req, res)=>{

    let form = Formidable.IncomingForm()
    const uploadsFolder = join(__dirname, '../frontend/public', 'images')
    form.maxFileSize = 50 * 1024 * 1024;
    form.uploadDir = uploadsFolder


    form.parse(req, async (err, fields, files)=>{
        if(err)
        {
            console.log(err)
        }
     
            const file = files.files
             let isValid = checkFileType(file)
            console.log(isValid)
            const fileName = file.name

            if(!isValid)
            {
                console.log("invalid")
            }

            else
            {
                try{
                    await fs.renameAsync(file.path, join(uploadsFolder, fileName))
                    console.log("file created")
                    return res.status(200).json("ok")
                }

                catch(e)
                {
                    console.log(e)
                    try { await fs.unlinkAsync(file.path) } catch (e) {}
                }

            }

        
    })

})

router.post("/post_novo_mercado", async (req, res)=>{

    console.log(req.body);
    const {errors, isValid} = validateNewStore(req.body)
    if(!isValid) return res.status(400).json(errors)

    const {nomeMercado, mercadoUrl} = req.body;

    const query = `
        INSERT INTO mercado(mer_nome, mer_img_url, mer_url)
        VALUES
        ('${nomeMercado}', '${req.body.imageURL}', '${mercadoUrl}')
    `;

    const client = await mysql.createConnection(env);
    client.query(query, (err, result)=>{
        if(err) throw err;
        console.log("result")

    
        client.end();
        return res.status(200).json("Success")
    })
})

router.get("/get_mercados", async (req,res)=>{

    const client = mysql.createConnection(env)
    const query = "SELECT * FROM mercado ORDER BY mer_nome asc";

    client.query(query, (err, result)=>{
        if (err) throw err;

        client.end();
        return res.status(200).json(result)
    })
})


router.post("/add_mercado", async (req, res)=>{

    const {errors, isValid} = validateAddStore(req.body)
    if(!isValid) return res.status(400).json(errors)

    const client = mysql.createConnection(env)

        console.log(req.body)
    
        const insertEnd = `
            INSERT INTO endereco(en_cep, en_cidade, en_estado, en_rua, en_numero, en_complemento)
            VALUES
            ('${req.body.cep}', '${req.body.cidade}', '${req.body.estado}', '${req.body.rua}', '${req.body.numero}', '${req.body.complemento}')
        `;

        const selectEnd = `
            SELECT en_id_endereco FROM endereco 
            WHERE 
            en_cep = '${req.body.cep}' and
            en_cidade = '${req.body.cidade}' and
            en_estado = '${req.body.estado}' and
            en_rua = '${req.body.rua}' and
            en_numero = '${req.body.numero}' and
            en_complemento = '${req.body.complemento}'
        `;

        client.query(insertEnd, (err, result)=>{
            if (err) throw err;
        ;

        client.query(selectEnd, (err, result)=>{
            if(err) throw err;
            const idEndereco = result[0].en_id_endereco;
            const idMercado = parseInt(req.body.idMercado)

            const insertMI = `
            INSERT INTO mercado_info(mer_info_id_mer, mer_info_id_endereco)
            VALUES
            (${idMercado}, ${idEndereco})`;
        
        
            client.query(insertMI, (err, result)=>{
                if(err) throw err;
        
                client.end();
                return res.status(200).json(200)
            })
        })
    })
})

router.get("/get_categorias", async (req, res)=>{

    const client = mysql.createConnection(env)
    const query = "SELECT * FROM categoria"

    client.query(query, (err, result)=>{

        if(err) throw err;
        client.end();
        return res.status(200).json(result)
    })
})

router.post("/post_novo_produto", async (req, res)=>{

    const {errors, isValid} = validateNovoProduto(req.body)
    if(!isValid) return res.status(400).json(errors)
    console.log(req.body)

    const client = mysql.createConnection(env)
    const idCategoria = parseInt(req.body.idCategoria)

    const query = `
        INSERT INTO produto(pro_nome, pro_descricao, pro_id_categoria)
        VALUES
        ('${req.body.nomeProduto}', '${req.body.descricao}', ${idCategoria})
    `;

    client.query(query, (err, result)=>{
        if(err) throw err;
        client.end();
        return res.status(200).json("OK")
    })
})

router.get("/get_produtos", async (req, res)=>{

    const client = mysql.createConnection(env)
    const query = "SELECT * FROM produto ORDER BY pro_nome"

    client.query(query, (err, result)=>{

        if(err) throw err;
        client.end();
        return res.status(200).json(result)
    })
})

router.get("/get_mercados", async (req, res)=>{

    const client = mysql.createConnection(env)
    const query = "SELECT * FROM mercado ORDER BY mer_nome"

    client.query(query, (err, result)=>{

        if(err) throw err;
        client.end();
        return res.status(200).json(result)
    })
})

router.post("/add_novo_item", async (req,res)=>{

    const {isValid, errors} = validateAddItem(req.body);
    if(!isValid) return res.status(400).json(errors);
    
    const client = mysql.createConnection(env)
    const idProduto = parseInt(req.body.idProduto)
    const idMercado = parseInt(req.body.idMercado)
    const preco = parseInt(req.body.preco)

    const query = `
        INSERT INTO item(it_id_produto, it_id_mercado, it_nome, it_preco, it_foto)
        VALUES
        (${idProduto}, ${idMercado}, '${req.body.nomeIten}', ${preco}, '${req.body.image}')
    `;

    client.query(query, (err, result)=>{
        if(err) throw err;

        client.end();
        console.log("ok")
        return res.status(200).json("OK")
    })
})


module.exports = router;