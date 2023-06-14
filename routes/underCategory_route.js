const express = require('express');
const undercategory_router = express.Router();
const underCategory = require ('../controllers/underCategory_controller');
const { authenticateToken } = require('../jwt/jwt_authenticate');


undercategory_router.get ('/',underCategory.get_underCategory)
undercategory_router.get ('/:id',underCategory.get_underCategory_id)
// undercategory_router.post ('/new',authenticateToken,underCategory.get_underCategory_post)
// undercategory_router.put ('/update/:id',authenticateToken,underCategory.get_underCategory_update)
// undercategory_router.delete ('/delete/:id',authenticateToken,underCategory.get_underCategory_delete)
undercategory_router.post ('/new',underCategory.get_underCategory_post)
undercategory_router.delete ('/delete/:id',underCategory.get_underCategory_delete)
undercategory_router.put ('/update/:id',underCategory.get_underCategory_update)


module.exports=undercategory_router