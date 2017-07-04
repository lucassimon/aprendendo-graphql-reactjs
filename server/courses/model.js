let Mongoose = require('mongoose')

const Course = new Mongoose.Schema({
  name: String
})

export default Mongoose.model('Course', Course);