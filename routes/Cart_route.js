const express = require('express');
const cart_router = express.Router();
const cart = require ('../controllers/Cart_controller');
const { authenticateToken } = require('../jwt/jwt_authenticate');


// cart_router.get ('/',cart.get_Cart)
// cart_router.post ('/new',cart.get_Cart_post)
// // category_router.post ('/new',authenticateToken,Category.get_Category_post)
// cart_router.get ('/:id',cart.get_Cart_id)
cart_router.put ('/update/:id',cart.get_Cart_update)
cart_router.delete ('/delete/:id',cart.get_Cart_delete)

module.exports=cart_router