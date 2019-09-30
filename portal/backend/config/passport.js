const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const keys = require("./keys");
const { Pool } = require('pg');
const env = require('../config/.env');
const pool = new Pool(env);
// const passort = require("passport")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, done)=>{
        const client = await pool.connect();
        
        try
        {
            const query = `SELECT * FROM usuario WHERE usu_id = ${jwt_payload.id_usuario}`;
            const res = await client.query(query);

            if(res.rowCount > 0)
            {
                return done(null, jwt_payload);
            }

            else
            {
                return done(null, false);
            }
        }

        catch(err){
            console.log(err)
        }finally{
            client.release();
        }

    }))
    
}