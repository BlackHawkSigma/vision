const app = require('../app')
const request = require('supertest')

describe('vision heartbeat api', function() {
  describe('when requesting resource /heartbeat', function() {
    it('should respond with 200', function(done) {
      request(app)
        .get('/heartbeat')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done)
    })
  })

  describe('when requesting resource /missing', function() {
    it('should respond with 404', function(done) {
      request(app)
        .get('/missing')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(404, done)
    })
  })
})
