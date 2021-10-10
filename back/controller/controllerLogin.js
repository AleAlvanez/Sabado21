const jwt = require('jsonwebtoken');
const loginModel = require("../model/modelLogin")

    module.exports.login = async (user) => {
        let login = new loginModel();
        let data= await login.find(user);
        if(data){
            let token = jwt.sign({data},process.env.SECRET_KEY,{
                expiresIn: process.env.JWT_EXPIRE
            }) 
            
            return token;
        } else{
            return "Usuario no autenticado"
        }
        
    }