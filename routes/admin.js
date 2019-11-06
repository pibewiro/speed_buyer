const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const env = require('../config/.env');
const passport = require("passport")
const auth = passport.authenticate("jwt", {session:false});
const multer = require("multer")
const path = require("path")
const app = express();
const validateNewStore = require("../validations/validateNewStore")
const validateAddStore = require("../validations/validateAddStore")
app.use(express.static('./frontend/public'))



router.post("/post_novo_mercado", async (req, res)=>{

    const {errors, isValid} = validateNewStore(req.body)
    if(!isValid) return res.status(400).json(errors)

    console.log(req.body);
    let imgUrl = req.body.image.slice(12);
    console.log(imgUrl)


    const storage = multer.diskStorage({
        destination:'./public/images/',
        filename: function(req, file, cb){
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    })

    const upload = multer({
        storage:storage,
    }).single('myimage');

    upload(req, res, (err)=>{
        if (err) throw err;
        console.log(req.file)
    })


    const {nomeMercado, mercadoUrl} = req.body;

    const query = `
        INSERT INTO mercado(mer_nome, mer_img_url, mer_url)
        VALUES
        ('${nomeMercado}', '${imgUrl}', '${mercadoUrl}')
    `;

    //const client = await mysql.createConnection(env);
    // client.query(query, (err, result)=>{
    //     if(err) throw err;
    //     console.log("result")

    
    //     client.end();
    //     return res.status(200).json("Success")
    // })
})

router.get("/get_mercados", async (req,res)=>{

    const client = mysql.createConnection(env)
    const query = "SELECT * FROM mercado ORDER BY mer_nome asc";

    client.query(query, (err, result)=>{
        if (err) throw err;

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


module.exports = router;