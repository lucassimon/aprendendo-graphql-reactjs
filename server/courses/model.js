let Mongoose = require('mongoose')

const states = ['required', 'optional', 'additional']
const Discipline = new Mongoose.Schema({
  order: {type: Number, min: 1},
  name: {type: String, required: true},
  ch: {type: Number, max: 240, min: 40},
  cr: {type: Number, max: 8, min: 0},
  kind: {type: String, enum: states}
})

const Curriculum = new Mongoose.Schema({
  order: {type: Number, min: 1},
  name: {type: String, required: true},
  disciplines: [Discipline]
})

const Course = new Mongoose.Schema({
  university: {type: String, required: true, trim: true},
  campus: {type: String, required: true, trim: true},
  name: {type: String, required: true, trim: true},
  category: {type: String, required: true, trim: true},
  description: {type: String, required: false},
  goals: {type: String, required: false},
  duration: {type: String, required: true},
  modality: {type: String, required: true},
  grid: [Curriculum],
  created: {type: Date},
  updated: {type: Date, default: Date.now}
})

module.exports = Mongoose.model('Course', Course)
