
module.exports=async (app)=>{
    app.get('/', async (req,res)=>{
        res.render('home')
    })
    app.get('/aboutUs', async (req,res)=>{
        res.render('about')
    })
    
    app.get('/categories', async (req,res)=>{
        res.render('categories')
    })
    
    app.get('/registerUser', async (req,res)=>{
        res.render('formRegistro')
    })
}