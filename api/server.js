const express = require('express')

const nameRouter = require('../names/name_router.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({whatever: "cool"})
})

server.use('/api/names', nameRouter)

module.exports = server