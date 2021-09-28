
module.exports=async (app)=>{
    app.get('/homeA', async (req,res)=>{
        res.redirect('http://127.0.0.1:5500/front/index.html')
    })
}