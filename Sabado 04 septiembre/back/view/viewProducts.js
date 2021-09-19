const productController = require('../controller/controllerProduct')
module.exports=async (app)=>{
    app.post('/product',async(req,res)=>{
        let product = req.body;
        res.send(await productController.createP(product));
    });
    app.get('/productsA',async(req,res)=>{
        res.send(await productController.readP());
});
}

