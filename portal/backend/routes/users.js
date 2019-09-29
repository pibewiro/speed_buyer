const express = require("express");
const router = express.Router();
const { Pool } = require('pg');
const env = require('../config/.env');
const pool = new Pool(env);

router.post("/new_user", async (req,response)=>{

    console.log(req.body)

    const client = await pool.connect();

    try
    {
        // const query = "INSERT INTO "
        // const res = await client.query("select * from usuario")
        // console.log(res)
        // response.send(res.rows.length.toString())
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

module.exports = router;