const sequelize = require('../back/conexion');
const bcryptjs = require('bcryptjs');

module.exports = class registerModel{
    
    async register(user){
        let passHash = await bcryptjs.hash(user.password, 8);
        let newUser = [
            user.user,
            user.name,
            user.email,
            passHash
        ]
       try{

            await sequelize.query(`INSERT INTO users ([user], [name], email, [password]) VALUES (?,?,?,?)`,
            {replacements: newUser, type: sequelize.QueryTypes.SELECT});
            return "Usuario registrado"
       }
       catch{
            console.log("error");
        }

    }
}