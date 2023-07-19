const route = require('express').Router()

const {
    index,
    save,
    findById,
    update,
    erase
} = require('../controllers/controll-authors')

route.get('/',index)

route.get('/:id',findById)

route.post('/',save)

route.put('/:id',update)

route.delete('/:id',erase)

module.exports = route;