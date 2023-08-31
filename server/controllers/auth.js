const AuthSchema = require('../models/auth.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  try {
    const { name, lastname, email, username, password } = req.body
    const user = await AuthSchema.findOne({ email: email })
    if (user) {
      return res.status(500).json({
        msg: 'Girilen email adresine ait bir kullanıcı zaten kayıtlı 🙃',
      })
    }
    if (password.length < 6) {
      return res
        .status(500)
        .json({ msg: 'Şifreniz 6 karakterden küçük olamaz.😠' })
    }
    const passwordHash = await bcrypt.hash(password, 8)
    if (!isEmail(email)) {
      return res.status(500).json({ msg: ' Hatalı email adresi girdiniz 😠' })
    }
    const newUser = await AuthSchema.create({
      name,
      lastname,
      email,
      username,
      password: passwordHash,
    })
    const token = jwt.sign({ id: newUser._id }, 'SECRET_KEY', {
      expiresIn: '1h',
    })
    res.status(201).json({
      status: 'OK',
      newUser,
      token,
    })
    console.log(newUser, 'user')
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}


function isEmail(emailAdress) {
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (emailAdress.match(regex)) return true
}



const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await AuthSchema.findOne({ email: email })

    if (!user) {
      return res.status(500).json({ msg: 'Girilen email kayıtlı değildir 😠' })
    }
    const passwordCompare = await bcrypt.compare(password, user.password)

    if (!passwordCompare) {
      return res.status(500).json({ msg: 'Hatalı şifre girdiniz😠' })
    }

    const token = jwt.sign({ id: user._id }, 'SECRET_KEY', { expiresIn: '1h' })

    res.status(200).json({
      status: 'OK',
      user,
      token,
    })
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}

module.exports = { register, login }
