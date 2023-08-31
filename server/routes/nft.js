// NFT routes

const express = require('express')
const {
  createNft,
  getNfts,
  getNft,
  deleteNft,
} = require('../controllers/nft.js')

const router = express.Router()

router.get('/getNfts', getNfts)
router.post('/createNft', createNft)
router.get(`/getNft`, getNft)
router.delete('/deleteNft', deleteNft)

module.exports = router
