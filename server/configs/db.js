let Mongoose = require('mongoose')

const db = Mongoose.connect('mongodb://localhost/sibelius').connection

export default db;