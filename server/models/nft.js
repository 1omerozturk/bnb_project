// NFT Database Model

const mongoose = require('mongoose')

const NftSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    require: true,
  },

  imgurl: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
})

module.exports = mongoose.model('nft', NftSchema)
