const express = require('express')
const http = require('http')
const morgan = require('morgan')
const config = require('../configuration')
const heartbeat = require('../routes/heartbeat')
const notFound = require('../middleware/notFound')
const app = express()

app.set('port', config.get("express:port"))

app.use(morgan('dev', {
  immediate: true
}))
app.get('/heartbeat', heartbeat.index)
app.use(notFound.index)

http.createServer(app).listen(
  app.get('port')
)

module.exports = app
