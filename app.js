const express= require('express');
const bodyParser=require('body-parser');

const app=express();

const adminroute=require('./routes/admin');
const customerroute=require('./routes/customer');

app.use(bodyParser.urlencoded({extended:false}));
// those req which has /admin in the beginning only funnel through this adminroute
app.use('/admin',adminroute);
app.use(customerroute); //order matters keep in mind

//middleware for handle page not found
app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>");
});

//it will do two work of node js. 1) create servr and send selp as callback 2)listen to the port
app.listen(3000);