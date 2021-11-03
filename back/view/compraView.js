const compraController = require('../controller/compraController')
const isRegistred = require('../middleware/midAuthentication')


module.exports = async (app) => {

    app.get('/cart',isRegistred.isRegistred, async(req,res) => {
        let data = await compraController.get();
        // console.log(data)
         res.render('cart',{data})
    })

    app.post('/cart',isRegistred.isRegistred, async(req,res) => {
        let product = req.body;
        // console.log(product)
        let data = await compraController.add(product);
        if(data)
        {
            res.render('index')
        }
    })
}