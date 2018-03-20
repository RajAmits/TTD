const User = require('../models/user')
// const db = require('../db.config');
exports.register = function (req, res) {
  console.log('hello server')
  var userInfo = new User({
    email: req.body.email,
    password: req.body.password
  })
  return userInfo.save(userInfo, function (err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json({users: result})
    }
  })
}
