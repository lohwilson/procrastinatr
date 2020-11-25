const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.loginPage);
router.post('/signup', userController.createNewUser);

module.exports = router;
