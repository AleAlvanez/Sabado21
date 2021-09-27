const userController = require('../controller/controllerUser')
const axios = require('axios');

module.exports=async (app)=>{
    app.get('/user/errorUser', async (req,res)=>{
        res.render('error404')
    })

    app.post('/user',async(req,res)=>{
        let usuario = req.body;
         indicador = await axios(`${process.env.LOCAL}`+usuario.usuario)
         
        if (indicador.data > 0){
            console.log("Deberia renderizarse")
             res.render('error404');
           
        } else 
        {
            res.send('<p>Se ha registrado el usuario ' + usuario.usuario+' con exito</p>');
            res.send(await userController.createU(usuario));
        }
    
    });

    app.get ('/users',async(req,res)=>{
        res.send(await userController.readU());
    }
    ); 

    app.post('/updateUser/:usuario',async(req,res)=>{
        let usuario = req.body;
        res.send(await userController.updateU(usuario));
    });
app.delete('/user/:usuario', async(req,res)=>{
    let usuario= req.params.usuario
        res.send(await userController.deleteU(usuario));
}
);

app.get('/user/:usuario',async(req,res)=>{
    let usuarioId= req.params.usuario
    let indicador = await userController.findU(usuarioId);
    res.send(indicador)
});


}
