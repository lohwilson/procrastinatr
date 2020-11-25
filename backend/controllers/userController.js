const User = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports = {
  loginPage(req, res) {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err))
  },
  signup(req, res) {
    
  },
  createUsername(req, res) {
    const username = req.body.username;
  
    const newUser = new User({username});
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  },
  createNewUser(req, res) {
    try {
      await User.findOne({username: req.body.username}, function (err, existingUser){
        if(existingUser === null){
          if(req.body.password === req.body.confirmPassword){
            req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUND));
            User.create(req.body)
          } else {
            console.log('Passwords do not match');
          }
        } else {
          console.log('Username already exists');
        }
      })
    } catch (err) {
      console.log('404 errror', err);
    }
  }
}