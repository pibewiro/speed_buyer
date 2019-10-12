const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const keys = require("./keys");
const mysql = require('mysql');
const env = require('./.env');
// const pool = new Pool(env);
//const passort = require("passport")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, done)=>{
        let client = await mysql.createConnection(env);
        

            const query = `SELECT * FROM usuario WHERE usu_id_usu = ${jwt_payload.id_usuario}`;

            await client.query(query, (err,result)=>{
                //client.end();

                if(err) throw err;
                
                if(result.length > 0)
                {
                    return done(null, jwt_payload);
                }
    
                else
                {
                    return done(null, false);
                }
            });    
        })
    )
}