// create a client to mongodb
var mongoose = require('mongoose')
// make client connect to mongo service
mongoose.connect('mongodb://localhost/TTD', function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Database Connected!')
  }
})
