const sequelize = require('../../back/conexion');
const bcryptjs = require('bcryptjs');

module.exports = class loginModel {
    constructor(login){
        this.login = login;
    }
    async find (user){
        let result = await sequelize.query("SELECT * FROM users WHERE usuario = '" + user.usuario + "'");
        if (result[0].length > 0 && (await bcryptjs.compare(user.password, result[0][0].password))) {
            if (user.usuario == result[0][0].user) {
                return result[0][0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}