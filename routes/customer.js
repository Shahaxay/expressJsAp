const express=require('express');
const route=express.Router();

route.get('/',(req,res,next)=>{
    res.send("<h2>this is root route</h2>")
})

module.exports=route;