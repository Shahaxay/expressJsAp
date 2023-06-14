const express=require('express');
const path=require('path');

const rootDir=require('../util/path');

const route=express.Router();

route.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
});

route.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
});
route.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=route;