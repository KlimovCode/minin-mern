const {Router} = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')

router.post('register', async (req, res) => {
  try {
    const { email, password } = req.body
    const candidate = await User.findOne({email})
    if(candidate) 
      return res.status(400).json({msg:'user exist'})
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = 
      await new User({email, password: hashedPassword})
    await user.save()
    res.status(201).json({msg:'user saved'})
  } catch(e) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})

module.exports = router
