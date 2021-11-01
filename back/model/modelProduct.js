const sequelize = require('../conexion')

module.exports = class Products{
    constructor(product){
        this.product=product
    }

    async createProducts (codigoP,nombreP,precio,idCategoria){
        let result =  await sequelize.query("INSERT INTO products (idProduct,product,price,idCateg) VALUES ('"+codigoP+" ','"+nombreP+"',"+precio+","+idCategoria+")");
        return result
    }

    async readProducts (){
        let result =  await sequelize.query("SELECT * FROM products");
        return result
    }
    async updateProducts (nameP,price,idCateg,idProducto){
        let result =  await sequelize.query("UPDATE products SET product = '"+nameP+"',price = "+price+",idCateg ="+idCateg+" WHERE idProduct= '"+idProducto+"'");
        return result
    }

    async deleteProducts (idProducto){
        let result =  await sequelize.query("DELETE FROM products WHERE idProduct= '"+idProducto+"'");
        return result
    }
   
    async find(productId){
        let result = await sequelize.query("SELECT * FROM products WHERE idProduct = '"+ productId+"'")
        return result;
    }

}