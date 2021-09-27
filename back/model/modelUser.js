const sequelize = require('../conexion')

module.exports = class Users{
    constructor(user){
        this.user=user
    }

    async createUser (usuario,nombre,primer_ap,correo,password,num_celular){
        let result =  await sequelize.query("INSERT INTO users (usuario,nombre,primer_Ap,correo,pass_word,num_celular) VALUES ('"+
        usuario+"','"+nombre+"','"+primer_ap+"','"+correo+"','"+password+"','"+num_celular+"')");
        return result
    }
    async readUser(){
        let result =  await sequelize.query("SELECT * FROM users");
        return result
    }

    async updateUser (nombre,primerAp,correo,pass_word,num_celular,usuario){
        let result =  await sequelize.query("UPDATE users SET nombre = '"+nombre+"',primer_Ap = '"+primerAp+"',correo ='"+correo+"', pass_word = '"+pass_word+"', num_celular='"+num_celular+"' WHERE usuario= '"+usuario+"'");
        return result
    }

    async deleteUser (usuario){
        let result =  await sequelize.query("DELETE FROM users WHERE usuario= '"+usuario+"'");
        return result
    }
	
	 async findUser(usuario){
        let result = await sequelize.query("SELECT usuario,correo,nombre, primer_Ap ,num_celular FROM users WHERE usuario = '"+  usuario+"'")
        let res = JSON.stringify(result)
        let indicador= res.charAt(res.length-2)
        return indicador;
        /*
        if(indicador > 0){
            console.log("usuario existe")
            
            //MANDAR MENSAJE AL USUARIO DE QUE DEBE REGISTRARSE CON OTRO USUARIO
        } else {
            //console.log("Producto encontrado")
            //DEJARLO QUE SE REGISTRE
        }
        */
  
    }
}
