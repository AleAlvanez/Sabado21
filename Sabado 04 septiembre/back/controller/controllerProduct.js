const modelProduct = require('../model/modelProduct')

module.exports.createP = async (product) =>{
let producto = new modelProduct();
//console.log(product.productName)
let data = await producto.createProducts(product.productName,product.price,product.idCategory);

}

module.exports.readP = async () =>{
    let response = new modelProduct();
    let result = await response.readProducts()
    return result;
}