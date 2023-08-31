//  User Database Model

const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  //  User Database Model
  
  username: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: new Date(),
  },
})

module.exports = mongoose.model('auth', AuthSchema)
