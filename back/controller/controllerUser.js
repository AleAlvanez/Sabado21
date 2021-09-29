const { response } = require('express');
const modelUser = require('../model/modelUser')

module.exports.createU = async (user) =>{
let response = new modelUser();
let data = await response.createUser(user.usuario,user.nombre,user.primer_ap,user.correo,user.password,user.num_celular);
return data;
}
module.exports.readU = async () =>{
    let response = new modelUser();
    let result = await response.readUser()
    return result;
}
module.exports.updateU = async (user) =>{
    let response = new modelUser();
    let data = await response.updateUser(user.nombre,user.primer_ap,user.correo,user.password,user.num_celular,user.usuario);
    }

module.exports.deleteU = async (usuario) =>{
    let response= new modelUser()
    let result = await response.deleteUser(usuario)
    return result;
}
module.exports.findU = async (usuario) =>{
    let response= new modelUser()
    let result = await response.findUser(usuario)
    return result;
}











/*module.exports.readP = async () =>{
    let response = new modelProduct();
    let result = await response.readProducts()
    return result;
}
}*/