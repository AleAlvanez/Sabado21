const modelUser = require('../model/modelUser')

module.exports.createU = async (user) =>{
let usuario = new modelUser();
let data = await usuario.createUser(user.usuario,user.nombre,user.primer_ap,user.correo,user.password,user.num_celular);

}

module.exports.deleteU = async (usuario) =>{
    let response= new modelUser()
    let result = await response.deleteUser(usuario)
    return result;
}

/*module.exports.readP = async () =>{
    let response = new modelProduct();
    let result = await response.readProducts()
    return result;
}
}*/