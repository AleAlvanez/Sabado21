const compraController = require('../controller/compraController')
const isRegistred = require('../middlewares/midAuthentication')


module.exports = async (app) => {

    app.get('/compra',isRegistred.isRegistred , async(req,res) => {
        let data = await compraController.get();
        // console.log(data)
         res.render('compra',{data})
    })

    app.post('/compra', isRegistred.isRegistred,async(req,res) => {
        let product = req.body;
        // console.log(product)
        let data = await compraController.add(product);
        if(data)
        {
            res.render('home')
        }
    })
}