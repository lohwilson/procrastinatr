const router = require('express').Router();
const User = require('../models/user.model');
const userController = require('../controllers/userController');


router.route('/').get( async (req, res) => {
  try {
    const response = await User.find()
    const user = await response.json();
    return user;
  } catch (err) {
    console.log('Error: ', err);
  }

  // User.find()
  // .then(users => res.json(users))
  // .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  
  const newUser = new User({username});
  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/', userController.loginPage);
router.post('/add', userController.createUsername);
router.post('/signup', userController.createNewUser);


module.exports = router;
