const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const database = require('./config/database.js')
const authRouter = require('./routes/auth.js')
const nftRouter = require('./routes/nft.js')
dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/', authRouter)

app.use('/', nftRouter)

const PORT = 5000

database()

app.listen(PORT, () => {
  console.log('Server is running', PORT)
})
