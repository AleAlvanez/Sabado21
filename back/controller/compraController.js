const compraModel = require("../model/compraModel")

module.exports.add = async(product) => {
   
    let addProduct = new compraModel();
    let data = await addProduct.add(product);

    if(data){
        return "Se agrego al carrito"
    }
    else{
        console.log(product)
    }
}

module.exports.get = async() => {
    let getProduct = new compraModel();
    let data = await getProduct.get();
    if(data){
        return data
    }
    else{
        return "Error"
    }
}
