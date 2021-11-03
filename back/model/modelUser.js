const sequelize = require('../conexion')

module.exports = class Users{
    constructor(user){
        this.user=user
    }

    async createUser (usuario,nombre,correo,password){
        try{
            let result =  await sequelize.query("INSERT INTO users ([user],[name],email,[password]) VALUES ('"+
        usuario+"','"+nombre+"','"+correo+"','"+password+"')");
        return result
        } catch(error){
            console.log(error);
            throw new Error ("SQL Error, usuario ya existe");
        }
        
    }
    async readUser(){
        let result =  await sequelize.query("SELECT * FROM users");
        return result
    }

    async updateUser (name,email,pass,id){
        let result =  await sequelize.query("UPDATE users SET [name] = '"+name+"',email ='"+email+"', [password] = '"+pass+"' WHERE id= '"+id+"'");
        return result
    }

    async deleteUser (id){
        let result =  await sequelize.query("DELETE FROM users WHERE id= '"+id+"'");
        return result
    }
	
	 async findUser(id){
        let result = await sequelize.query("SELECT * FROM users WHERE id = '"+  id+"'")
        return result;
    }
}
