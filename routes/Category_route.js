const express = require('express');
const category_router = express.Router();
const Category = require ('../controllers/Category_controller');
const { authenticateToken } = require('../jwt/jwt_authenticate');
const upload = require ('../jwt/uploads')


category_router.get ('/',Category.get_Category)
category_router.get ('/:id',Category.get_Category_id)
category_router.post ('/new',upload.single('image'),Category.get_Category_post)
category_router.put ('/update/:id',upload.single('image'),Category.get_Category_update)
category_router.delete ('/delete/:id',upload.single('image'),Category.get_Category_delete)


module.exports=category_router