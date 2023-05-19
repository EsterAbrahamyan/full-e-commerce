const express = require('express')
const app = express()
app.use(express.json());
app.use('/uploads', express.static('uploads'))
const product_router=require("./routes/Product_route")
// const user_router=require("./routes/UserRout")
const category_router=require("./routes/Category_route")
const undercategory_router=require("./routes/underCategory_route")
let bodyParser = require('body-parser') 
let cors=require('cors');
const user_router = require('./routes/Users_rout');
const cart_router = require('./routes/Cart_route');
const cartitems_router = require('./routes/CartItems_route');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use("/product",product_router)
app.use("/category",category_router)
app.use("/undercategory",undercategory_router)
app.use("/users",user_router)
app.use("/cart",cart_router )
app.use("/cartitems",cartitems_router)




app.listen(6005)