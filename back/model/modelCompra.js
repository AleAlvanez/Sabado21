const sequelize = require('../conexion')

module.exports = class Compra{
    constructor(compra){
        this.compra=compra
    }

    async createProducts (codigoP,nombreP,precio,idCategoria){
        let result =  await sequelize.query("INSERT INTO products (idProduct,product,price,idCateg) VALUES ('"+codigoP+" ','"+nombreP+"',"+precio+","+idCategoria+")");
        return result
    }
   
    async find(productId){
        let result = await sequelize.query("SELECT * FROM products WHERE id = "+ productId)
        return result;
    }
}