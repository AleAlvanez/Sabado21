const modelProduct = require('../model/modelProduct')

module.exports.createP = async (product) =>{
let producto = new modelProduct();
//console.log(product.productName)
let data = await producto.createProducts(product.idProduct,product.product,product.price,product.idCateg);

}

module.exports.readP = async () =>{
    let response = new modelProduct();
    let result = await response.readProducts()
    return result;
}

module.exports.updateP = async (product) =>{
    let producto = new modelProduct();
    //var keys = Object.keys(product);
    let data = await producto.updateProducts(product.product,product.price,product.idCateg, product.idProduct);
    }
module.exports.deleteP = async (productId) =>{
    let response= new modelProduct()
    let result = await response.deleteProducts(productId)
    return result;
}