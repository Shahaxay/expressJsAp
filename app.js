const express= require('express');
const path=require('path');
const bodyParser=require('body-parser');

const productController=require('./controllers/productController');

const app=express();

const adminroute=require('./routes/admin');
const customerroute=require('./routes/customer');

app.use(bodyParser.urlencoded({extended:false}));
//sending file statically
app.use(express.static(path.join(__dirname,'public')));

// those req which has /admin in the beginning only funnel through this adminroute
app.use('/admin',adminroute);
app.use(customerroute); //order matters keep in mind

//middleware for handle page not found
app.use(productController.showPageNotFoundPage);

//it will do two work of node js. 1) create servr and send selp as callback 2)listen to the port
app.listen(3000);