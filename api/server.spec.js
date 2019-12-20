const request = require('supertest')

const server = require('./server.js')

describe('server.js', () => {
  describe('index route', () => {
    it('should return http status code 200', async () => {
      const expectedStatus = 200

      const response = await request(server).get('/');

      expect(response.status).toEqual(expectedStatus)
    })

    it('should return a json object', async () => {
      const response = await request(server).get('/');

      expect(response.type).toEqual('application/json')
    })
  })

  describe('name route', () => {
    it('should return http status code 200', async () => {
      const expectedStatus = 200

      const response = await request(server).get('/');

      expect(response.status).toEqual(expectedStatus)
    })

    it('should return a json object', async () => {
      const response = await request(server).get('/');

      expect(response.type).toEqual('application/json')
    })
  })

})