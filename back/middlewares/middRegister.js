const Joi = require('joi');

module.exports = {
    userModel : Joi.object().keys({
        usuario : Joi.string().min(1).max(50).required(),
        nombre:Joi.string().min(1).max(70).required(),
        password: Joi.string().min(8).max(200).required(),
        correo: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
    }).with('user',['name','email','password'])
}
