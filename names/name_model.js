const db = require('../data/dbconfig.js')

function addName(name) {
  return db('name').insert(name)
}

function removeName(name) {
  return db('name').where({name: name.name}).del()
    .then(delName => delName)
    .catch(err => err)
}

module.exports = {
  addName,
  removeName
}