const express = require('express')
const http = require('http')
const config = require('../configuration')
const heartbeat = require('../routes/heartbeat');
const app = express()

app.set('port', config.get("express:port"))

app.get('/heartbeat', heartbeat.index)

http.createServer(app).listen(
  app.get('port')
)

module.exports = app
