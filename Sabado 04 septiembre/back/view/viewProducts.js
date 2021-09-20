const productController = require('../controller/controllerProduct')
module.exports=async (app)=>{
    //CREATE
    app.post('/product',async(req,res)=>{
        let product = req.body;
        res.send(await productController.createP(product));
    });
    //READ
    app.get('/productsA',async(req,res)=>{
        res.send(await productController.readP());
});
//UPDATE
app.post('/updateProduct/:id',async(req,res)=>{
    let product = req.body;
    res.send(await productController.updateP(product));
});
//DELETE
app.delete('/product/:idProduct', async(req,res)=>{
    let productId= req.params.idProduct
        res.send(await productController.deleteP(productId));
}
);



}

