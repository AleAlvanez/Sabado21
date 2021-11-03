const sequelize = require('../../back/conexion');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');

module.exports.isRegistred = async (req,res,next) =>{
    if(req.cookies.jwt){
        try{
            
            const decode = await promisify(jwt.verify)(req.cookies.jwt, process.env.SECRET_KEY)
            const data = decode.data;
            let result = await sequelize.query("SELECT [user],[name] FROM users WHERE user ='"+ data.user+"'")
            
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