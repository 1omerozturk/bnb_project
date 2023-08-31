const mongoose = require('mongoose')

// Database connecting

const database = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('connected to mongoDB')
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = database
