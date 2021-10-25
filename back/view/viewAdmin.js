module.exports=async (app)=>{
    app.get('/homeAdmin', async (req,res)=>{
        res.render('admin')
    })
}