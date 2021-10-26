const productController = require('../controller/controllerProduct')
const userController = require('../controller/controllerUser')

module.exports=async (app)=>{
    app.get('/homeAdmin', async (req,res)=>{
        var dataP = await productController.readP();
        var dataU = await userController.readU();
        res.render('admin',{dataP: dataP, dataU: dataU})
    })
    app.get('/homeAdmin/newProduct', async (req,res)=>{
        res.render('newProduct')
    })   
    app.post('/homeAdmin/newProduct',async(req,res)=>{
        let product = req.body;
        console.log(product)
        let data = await productController.createP(product);
        if(data){
            res.redirect('/homeAdmin')
        }
    });
}