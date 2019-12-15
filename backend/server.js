const express = require("express");
const app = express();
const env = require('./config/.env').port;
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser")
const userRoutes = require("./routes/users")
const profileRoutes = require("./routes/profile")
const lojasRoutes = require("./routes/lojas")
const path = require("path")
const cors = require('cors')
const adminRoutes = require("./routes/admin")
const morgan = require("morgan")

const passport = require("passport");
// const {pool} = require("pg");


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors())
app.use(morgan('dev'))
require("./config/passport")(passport);




app.use("/user", userRoutes);
app.use("/profile", profileRoutes);
app.use("/lojas", lojasRoutes);
app.use("/admin", adminRoutes);


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