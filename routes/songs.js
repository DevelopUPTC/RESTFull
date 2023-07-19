const route = require('express').Router()

const {
    index,
    findById,
    save
} = require('../controllers/controll-songs')

route.get('/',index)

route.get('/:id',findById)

route.post('/:id',save)

module.exports = route