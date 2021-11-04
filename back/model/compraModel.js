const { compareSync } = require('bcryptjs');
const sequelize = require('../conexion');


module.exports = class compraModel{
    
    async add(product){
        let newUser = [
            product.id,
            product.title,
            product.price,
            product.cantidad
        ]
        console.log(product)
       try{

            let result = await sequelize.query("SELECT * FROM cartProducts WHERE id_product = '" + product.id + "'");
            if(result[0].length == 0){
            await sequelize.query(`INSERT INTO cartProducts (id_product, [name], price, cantidad) VALUES (?,?,?,?)`,
            {replacements: newUser, type: sequelize.QueryTypes.SELECT});
            return "Usuario registrado"
            }
            else{
                console.log(result[0][0])
                let cantidad = result[0][0].cantidad + 1;
                await sequelize.query("UPDATE cartProducts SET cantidad = '" + cantidad  + "' WHERE id_product = '" + product.id + "'");
                return "Usuario registrado"

            }
       }
       catch{
            console.log("error");
        }

    }


    async get() {

            let result = await sequelize.query("SELECT * FROM cartProducts");
            if(result.length > 0){
                return result[0];
            }
            else{
                return "false"
            }
        }
    
}