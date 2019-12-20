const express = require('express')

const Names = require('./name_model.js')

const router = express.Router()

router.post('/', (req, res) => {
  Names.addName(req.body)
    .then(name => res.status(200).json(name))
    .catch(err => res.status(500).json(err))
})

router.delete('/', (req, res) => {
  Names.removeName(req.body)
    .then(num => res.status(200).json(num))
    .catch(err => res.status(500).json(err))
})

module.exports = router