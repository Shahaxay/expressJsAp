const express= require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("in first middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("in the second middle ware");
    res.send('<h2>hlo this is from express js app</h2>')
})
app.listen(3000);