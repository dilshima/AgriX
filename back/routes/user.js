const express = require('express');
const { loginController, signupController } = require('../controller/user');
const router = express.Router();


router.post('/login', loginController);
router.post('/signup', signupController);



module.exports = router;
