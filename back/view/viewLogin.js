const loginController = require('../controller/controllerLogin')

module.exports = async (app) => {

    app.get('/login',  async(req,res) => {
        res.render('login',{
            alert: false,
            alertTitle: "Advertencia",
            alertMessage: "Ingrese un usuario y contraseña",
            alertIcon: 'info',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
        })
    })

    app.post('/login',async(req,res) => {
        let user = req.body;
            login = await(loginController.login(user));
            res.render('login',{
                alert: true,
                alertTitle: "Conexión Exitosa",
                alertMessage: "Login Correcto",
                alertIcon: 'success',
                showConfirmButton: false,
                timer: 1500,
                ruta: ''
            })
            console.log("esto es login: "+login)
    });
};
