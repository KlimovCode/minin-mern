const { Router } = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../models/User')

router.post('/register',
  [
    check('email', 'not correct email').isEmail(),
    check('password', '6 symbols min').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'not correct data'
      })
    }
    try {


      const { email, password } = req.body
      const candidate = await User.findOne({ email })
      if (candidate)
        return res.status(400).json({ msg: 'user exist' })
      const hashedPassword = await bcrypt.hash(password, 12)
      const user =
        await new User({ email, password: hashedPassword })
      await user.save()
      res.status(201).json({ msg: 'user saved' })
    } catch (e) {
      res.status(500).json({ msg: 'something went wrong' })
    }
  })
router.post('/login',
  [
    check('email', 'not correct email')
      .normalizeEmail()
      .isEmail(),
    check('password', 'input password').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'not correct data while login'
      })
    }
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email })
      if (!user)
        return res.status(400).json({ msg: 'user not exist' })
      const isMatch = bcrypt.compare(password, user.password)
      if (!isMatch)
        return res.status(400).json({ msg: 'not correct' })
      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )
      res.status(201).json({ token, userId: user.id })

    } catch (e) {
      res.status(500).json({ msg: 'something went wrong' })
    }
  })

module.exports = router
