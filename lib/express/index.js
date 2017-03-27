const express = require('express')
const http = require('http')
const config = require('../configuration')
const heartbeat = require('../routes/heartbeat')
const notFound = require('../middleware/notFound')
const app = express()

app.set('port', config.get("express:port"))

app.get('/heartbeat', heartbeat.index)
app.use(notFound.index)

http.createServer(app).listen(
  app.get('port')
)

module.exports = app
