const sequelize = require('../conexion')

const bcryptjs = require('bcryptjs');

module.exports = class registerModel{
    
    async register(user){
        let newUser = [
            user.user,
            user.name,
            user.email,
            user.password
        ]
       try{

            await sequelize.query(`INSERT INTO users ([user], [name], email, [password]) VALUES (?,?,?,?)`,
            {replacements: newUser, type: sequelize.QueryTypes.SELECT});
            return "Usuario registrado"
       }
       catch{
            console.log("ocurrio un error al registrar");
        }

    }
}