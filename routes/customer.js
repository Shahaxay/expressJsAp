const express=require('express');
const path=require('path');

const rootDir=require('../util/path');
const productController=require('../controllers/productController');

const route=express.Router();

route.get('/contactus',productController.showContactUsPage);

route.post('/success',productController.showSuccessPage);
route.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=route;