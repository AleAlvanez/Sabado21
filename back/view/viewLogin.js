const loginController = require('../controller/controllerLogin')

module.exports = async (app) => {

    app.get('/login', async(req,res) => {
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
   
        if(!user.user || !user.pass){
            res.render('login',{
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y contraseña",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false,
                ruta: 'login'
            })
        }
        else{
            login = await(loginController.login(user));
            if(login != "Usuario no autenticado"){
                const cookieOptions = {
                    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie('jwt', login, cookieOptions)
                console.log(login)
                res.render('login',{
                    alert: true,
                    alertTitle: "Conexión Exitosa",
                    alertMessage: "Login Correcto",
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: ''
                })
            }
            else{
                res.render('login',{
                    alert: true,
                    alertTitle: "Advertencia",
                    alertMessage: "Usuario y/o contraseña incorrectos",
                    alertIcon: 'info',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                })
            }
        }

    });
};

