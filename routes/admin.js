const express=require('express');
const path=require('path');

const rootDir=require('../util/path');

const route=express.Router();//this is middle ware

route.use('/add-product',(req,res,next)=>{
    //it is used to send response to the client. After sending response, middle ware written behind will not execute
    //res.send('<form action="/admin/product" method="post"><label for="product">Product</label></label><input type="text" name="title" id="product"><br>Quantity:<input type="number" name="quantity" id="quant"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(rootDir,'views','add_product.html'));
})
route.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

//export route
module.exports=route;