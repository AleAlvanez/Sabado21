const Joi = require('joi');

module.exports = {
    loginModel : Joi.object().keys({
        usuario: Joi.string().alphanum().min(1).max(50).required(),
        password: Joi.string().min(8).max(200).required()
    }).with('user','password')
}