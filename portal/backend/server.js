const express = require("express");
const app = express();
const env = require('./config/.env').port;
const port = 5000;
const bodyParser = require("body-parser")
const userRoutes = require("./routes/users")

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use("/user", userRoutes);

// pool.connect()
// .then(res=>console.log("Connected to DB"));

app.listen(port, ()=>{
    console.log("Connected to Port:", port)
})