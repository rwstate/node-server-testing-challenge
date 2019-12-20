const knex = require('knex')

const knexfile = require('../knexfile.js')

const environment = process.env.DB_ENV || 'testing'

const db = knex(knexfile.testing)

module.exports = db