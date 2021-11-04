const productController = require('../controller/controllerProduct')
const userController = require('../controller/controllerUser')

module.exports=async (app)=>{
    app.get('/homeAdmin', async (req,res)=>{
        var dataP = await productController.readP();
        var dataU = await userController.readU();
        res.render('admin',{dataP: dataP, dataU: dataU})
    })
    app.get('/newProduct', async (req,res)=>{
        res.render('newProduct')
    })   
    app.post('/newProduct',async(req,res)=>{
        console.log(req.body)
        try {
            let data = await productController.createP(req.body);
            res.redirect('/homeAdmin')
        } catch (error) {
            console.log("Ocurrio un error")
        }
    });
    app.get('/editProduct/:id', async (req,res)=>{
        const dataE =  await productController.findP(req.params.id)
        console.log(dataE[0][0])
        res.render('editProduct',{dataE: dataE})
    }) 

    app.post('/editProduct', async(req,res) => {
        console.log(req.body)
        try {
            data = await productController.updateP(req.body);
            res.redirect('/homeAdmin')
        } catch (error) {
            console.log("Ocurrio un error")
        }
        

    })

    app.get('/deleteProduct/:id',  async(req,res) => {
        const data = await productController.deleteP(req.params.id);
        if(data){
            res.redirect('/homeAdmin')
        }
        
    })

    app.get('/editUser/:id', async (req,res)=>{
        let product = req.body;
        const dataEU =  await userController.findU(req.params.id)
        console.log(dataEU[0][0])
        res.render('editUser',{dataEU: dataEU})
    }) 

    app.post('/editUser', async(req,res) => {
        console.log(req.body)
        try {
            data = await userController.updateU(req.body);
            res.redirect('/homeAdmin')
        } catch (error) {
            console.log("Ocurrio un error")
        }
        

    })

    app.get('/deleteUser/:id',  async(req,res) => {
        const data = await userController.deleteU(req.params.id);
        if(data){
            res.redirect('/homeAdmin')
        }
        
    })

}