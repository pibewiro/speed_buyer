const express = require("express");
const app = express();
const env = require('./config/.env').port;
const port = process.env.port || 5000;
const bodyParser = require("body-parser")
const userRoutes = require("./routes/users")
const profileRoutes = require("./routes/profile")
const passport = require("passport");
// const {pool} = require("pg");


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/user", userRoutes);
app.use("/profile", profileRoutes);


// pool.connect()
// .then(res=>console.log("Connected to DB"));

if(process.env.NODE_ENV === "production")
{
    app.use(express.static("frontend/build"))

    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}
app.listen(port, ()=>{
    console.log("Connected to Port:", port)
})