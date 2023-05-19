const express = require('express');
const category_router = express.Router();
const Category = require ('../controllers/Category_controller');
const { authenticateToken } = require('../jwt/jwt_authenticate');

category_router.get ('/',Category.get_Category)
category_router.get ('/:id',Category.get_Category_id)
category_router.post ('/new',authenticateToken,Category.get_Category_post)
category_router.put ('/update/:id',authenticateToken,Category.get_Category_update)
category_router.delete ('/delete/:id',authenticateToken,Category.get_Category_delete)


module.exports=category_router