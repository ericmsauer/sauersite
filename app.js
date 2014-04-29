var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , router = require('./routes')
var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

router.set_routes(app)

app.listen(8080, '0.0.0.0');
console.log("Server running on http://localhost:8888");
