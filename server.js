const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
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
const viewHome = require("./back/view/viewHome");
const loginView = require('./back/view/viewLogin');
const viewCheckout = require("./back/view/viewCheckout");
const viewAdmin = require("./back/view/viewAdmin");
const viewRegister = require("./back/view/registerView");
const mercadopago = require ('mercadopago');

mercadopago.configure({
    access_token: 'TEST-2980369868037313-110301-30ad5bfab03219ebf8d5146d15241962-1010994273'
  });
//Middlelware
app.use(express.urlencoded({extended:false  }))
app.use(express.json());
app.use(cors());
app.use(cookieParser());


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
loginView(app)
viewCheckout(app)
viewAdmin(app)
viewRegister(app)

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

