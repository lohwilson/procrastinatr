const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const SALT_ROUND = 10;

module.exports = {
  loginPage(req, res) {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err))
  },

  async createNewUser(req, res) {
    try {
      await User.findOne({username: req.body.username}, function (err, existingUser){
        if(existingUser === null){
          req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUND));
          User.create(req.body)
        } else {
          console.log('Username already exists');
        }
      })
    } catch (err) {
      console.log('404 errror', err);
    }
  },
}