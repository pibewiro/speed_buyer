const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const env = require('../config/.env');
const passport = require("passport")
const auth = passport.authenticate("jwt", {session:false});

router.get("/get_user", auth, (req,response)=> {
    console.log(req.body);
})


module.exports = router;