
module.exports=async (app)=>{
    app.get('/checkOut', async (req,res)=>{
        res.render('compra')
    })
}