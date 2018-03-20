const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
var db = require('./db.config')
console.log(db)

var app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.set('port', process.env.PORT || 8100)

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())

app.use('/', routes)

app.listen('8100', function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('server running on port:8100')
  }
})
