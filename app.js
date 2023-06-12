const express= require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    //it is used to send response to the client. After sending response, middle ware written behind will not execute
    res.send('<form action="/product" method="post"><label for="product">Product</label></label><input type="text" name="title" id="product"><br>Quantity:<input type="number" name="quantity" id="quant"><button type="submit">Add Product</button></form>');
})
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send("<h2>this is root route</h2>")
})
//it will do two work of node js. 1) create servr and send selp as callback 2)listen to the port
app.listen(3000);