const express = require('express');
const product_router = express.Router();
const Product = require ('../controllers/Product_controller');
const { authenticateToken } = require('../jwt/jwt_authenticate');
const upload = require ('../jwt/uploads')


product_router.get ('/',Product.get_Product)
product_router.get ('/:id',Product.get_Product_id)
product_router.put ('/update/:id',upload.single('image'),Product.get_Product_update)
product_router.post ('/new',upload.single('image'),Product.get_Product_post)
product_router.delete ('/delete/:id',upload.single('image'),authenticateToken,Product.get_Product_delete)



module.exports=product_router