require('dotenv').config()

let Mongoose = require('mongoose')

const db = Mongoose.connect(process.env.DATABASE_URL).connection

module.exports = db