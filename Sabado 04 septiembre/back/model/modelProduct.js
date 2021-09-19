const sequelize = require('../conexion')

module.exports = class Products{
    constructor(product){
        this.product=product
    }

    async createProducts (nombreP,precio,idCategoria){
        let result =  await sequelize.query("INSERT INTO products (product,price,idCateg) VALUES ('"+nombreP+"',"+precio+","+idCategoria+")");
        return result
    }

    async readProducts (){
        let result =  await sequelize.query("SELECT * FROM products");
        return result
    }
    async deleteProducts (idProducto){
        let result =  await sequelize.query("DELETE FROM products WHERE idProduct= "+idProducto);
        return result
    }


    
    async find(productId){
        let result = await sequelize.query("SELECT * FROM products WHERE id = "+ productId)
        return result;
    }
}