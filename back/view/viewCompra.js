const compraController = require('../controller/compraController')
const db = require('../db/db');
module.exports=async (app)=>{

    //READ
    app.get('/cart',function (req, res) {
        res.send(db.Cart)
    });

    app.post('/create-checkout-session', async (req, res) => {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              // TODO: replace this with the `price` of the product you want to sell
              price: '{{PRICE_ID}}',
              quantity: 1,
            },
          ],
          payment_method_types: [
            'card',
          ],
          mode: 'payment',
          success_url: `http://${process.env.HOST}:${process.env.PORT}/success.html`,
          cancel_url: `http://${process.env.HOST}:${process.env.PORT}/cancel.html`,
        });
      
        res.redirect(303, session.url)
      });

    /*app.post('/cart',midd.Autenticar, function (req, res) {
    if (!req.body.id || !req.body.nombre || !req.body.cantidad || !req.body.precio) {
        db.respuesta = {
            codigo: 502,
            error: true,
            mensaje: 'Es indispensable enviar nombre y código del país'
        }
    } else {
        if (db.buscaProducto(req.body.id)) {
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'Producto añadido'
                
            }
        } else {
            db.nuevoProducto(req.body.id, req.body.nombre,req.body.cantidad,req.body.precio)
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: '¨Producto Agregado'
            }
        }
    }
    res.send(db.respuesta)
})



app.delete('/cart/:id', function (req, res) {
    if (db.borraProducto(req.params.id)) {
            db.respuesta = {
            codigo: 200,
            error: false,
            mensaje: 'Producto eliminado'
        }
    } else {
        db.respuesta = {
            codigo: 421,
            error: true,
            mensaje: 'Producto no existe'
        }
    }
    res.send(db.respuesta);
})
*/


}
