const sequelize = require('../../back/conexion');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');

module.exports.isRegistred = async (req,res,next) =>{
    if(req.cookies.jwt){
        try{
            
            const decode = await promisify(jwt.verify)(req.cookies.jwt, process.env.SECRET_KEY)
            const data = decode.data;
            let result = await sequelize.query("SELECT usuario,nombre,primer_Ap FROM users WHERE usuario ='"+ data.usuario+"'");
            
            if(result){
                req.user = data
                return next()
            }            
        }
        catch(error){
            console.log(error)
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/login')
    }
}