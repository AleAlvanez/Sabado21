
const mercadopago = require ('mercadopago');


module.exports = async (app) => {

    app.post('/checkout',  async(req,res) => {
       
                    console.log(JSON.stringify(req.body.name[0]))

        

       
        let items=[ ];
          for(var i=0; i<req.body.name.length; i++){
            items.push({
                title: JSON.stringify(req.body.name[i]),
                unit_price: parseInt(JSON.parse(req.body.price[i])),
                quantity: parseInt(JSON.parse(req.body.qty[i])),

            })
        }
        console.log(items)
       
        let preference = {
            items,
            back_urls: {
                "success": "http://localhost:3000/",
                "failure": "http://localhost:3000/compra",
                "pending": "http://localhost:3000/"
            },
            auto_return: "approved",
             };
    

         mercadopago.preferences.create(preference)
         .then(function(response){
        
        res.redirect(response.body.sandbox_init_point)
         }).catch(function(error){
         console.log(error);
         });

            
        })

    
}