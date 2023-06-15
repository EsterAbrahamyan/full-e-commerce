const express = require('express');
const cartitems_router = express.Router();
const cartitems = require ('../controllers/CartItems_controller');
// const { authenticateToken } = require('../jwt/jwt_authenticate');


cartitems_router.get ('/',cartitems.get_CartItems)
cartitems_router.post ('/new',cartitems.get_CartItems_post)
// // category_router.post ('/new',authenticateToken,Category.get_Category_post)
cartitems_router.get ('/:id',cartitems.get_CartItems_id)
cartitems_router.put ('/update/:id',cartitems.get_CartItems_update)
cartitems_router.delete ('/delete/:id',cartitems.get_CartItems_delete)
cartitems_router.put('/increment/:id', cartitems.incrementCartItem)
cartitems_router.put('/decrement/:id', cartitems.decrementCartItem)

module.exports=cartitems_router