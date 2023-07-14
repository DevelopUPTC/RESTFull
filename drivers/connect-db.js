const mongoose = require('mongoose')

//const URI = "http://127.0.0.1:27017/songs"
const URI = "mongodb+srv://cristian:cristian@cluster0.j16t7eu.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false)

const options = {
    useNewUrlParser:true, useUnifiedTopology:true
}

mongoose.connect(URI,options)
    .then(()=>console.log('Connect DB Success'))
    .catch( e => console.log(e))

module.exports = mongoose