const NftSchema = require('../models/nft')

// getNfts for all User

const getNfts = async (req, res) => {
  try {
    const nfts = await NftSchema.find()
    res.json(nfts)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// createNft only auth users

const createNft = async (req, res) => {
  try {
    const newNft = await NftSchema.create(req.body)
    res.status(200).json(newNft)
  } catch (error) {
    res.status(201).json({ msg: error.message })
  }
}

// getNft only auth users

const getNft = async (req, res) => {
  try {
    const id = req.query.id
    const nft = await NftSchema.findById(id)
    res.json(nft)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// deleteNft only admin and auth users

const deleteNft = async (req, res) => {
  try {
    const { id } = req.params
    await NftSchema.findByIdAndRemove(id)
    res.status.message({ msg: 'Silme işlemi başarılı.' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

module.exports = { getNfts, getNft, createNft, deleteNft }
