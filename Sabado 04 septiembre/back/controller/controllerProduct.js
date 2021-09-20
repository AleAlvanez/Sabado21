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

module.exports.updateP = async (product) =>{
    let producto = new modelProduct();
    var keys = Object.keys(product);
    console.log(keys[0]);
    //console.log(product.productName)
    //let data = await producto.updateProducts(product.productName,product.price,product.idCategory);
    }
module.exports.deleteP = async (productId) =>{
    let response= new modelProduct()
    let result = await response.deleteProducts(productId)
    return result;
}