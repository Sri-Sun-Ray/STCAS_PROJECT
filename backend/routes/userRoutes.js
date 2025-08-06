const express = require('express');
const router = express.Router();
const {register,login}=require('../controllers/userController');

// POST: Register user
router.post('/register',register);
//POST: Login User.
router.post('/login',login);
module.exports = router;
