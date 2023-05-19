const express = require('express');
const user_router = express.Router();
const Users = require ('../controllers/Users_controller');
const { authenticateToken } = require('../jwt/jwt_authenticate');



user_router.get ('/',Users.get_Users)
user_router.get ('/:id',authenticateToken,Users.get_Users_id)
user_router.put ('/update/:id',Users.get_Users_update)
user_router.delete ('/delete/:id',Users.get_Users_delete)

user_router.post('/register',Users.Users_register)
user_router.post('/login',Users.Users_login)



module.exports=user_router