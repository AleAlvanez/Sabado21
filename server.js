const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

const midd = require('./back/middlewares/midd');
const cors = require('cors');
const app = express();
const path = require('path');
const router = express.Router();
const axios = require('axios');
const sequelize = require('./back/conexion');
const viewProducts = require("./back/view/viewProducts");
const viewUsers = require("./back/view/viewUsers");
const viewCompra = require("./back/view/viewCompra");
const Openpay = require('openpay');
const viewHome = require("./back/view/viewHome");

var openpay = new Openpay('moiep6umtcnanql3jrxp','sk_3433941e467c4875b178ce26348b0fac');

//Middlelware
app.use(express.json());
app.use(cors());
app.use(midd.log);
app.use(midd.limitador);

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use('/', router);

async function serverStart(){
    try{


        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch(e){
        console.error(e.message);
    }
}

serverStart();
viewHome(app)
viewProducts(app)
viewUsers(app)
viewCompra(app);
// manejador de errores
app.use((err,req,res,next)=>{
if(err){
    console.error(err);
    if(res.headersSent){
        res.status(500).send("Error en el servidor"+ err.menssage)
    }
} else {
    next()
}
})



router.get('/',function(req,res){
    res.sendFile(path.join('C:\\Users\\HP\\Documents\\sabado21\\front\\index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/products',async(req, res)=>{
    try{
        const products = await axios(`${process.env.URL}${process.env.CATEGORY}`)
        res.status(200).send(products.data)
    }catch(e){
        console.error(e.message)
        res.status(400).send({error: e.message})
    }
})

router.get('/trendsproducts',async(req, res)=>{
    try{
        const products = await axios(`${process.env.URL_TRENDS}${process.env.CATEGORY}`)
        res.status(200).send(products.data)
    }catch(e){
        console.error(e.message)
        res.status(400).send({error: e.message})
    }
})

