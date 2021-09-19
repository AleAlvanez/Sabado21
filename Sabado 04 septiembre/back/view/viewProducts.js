const productController = require('../controller/controllerProduct')
module.exports=async (app)=>{
    app.post('/product',async(req,res)=>{
        let product = req.body;
        res.send(await productController.createP(product));
    });
    app.get('/productsA',async(req,res)=>{
        res.send(await productController.readP());
});

app.delete('/product/:idProduct', async(req,res)=>{
    let productId= req.params.idProduct
        res.send(await productController.deleteP(productId));
}
);

}

