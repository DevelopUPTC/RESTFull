const route = require('express').Router()

const {
    index,
    save
} = require('../controllers/controll-authors')

route.get('/',index)

route.post('/',save)

module.exports = route;