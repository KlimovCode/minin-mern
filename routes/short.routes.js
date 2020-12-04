const { Router } = require('express')
const router = Router()

const Link = require('../models/Link')

router.get('/:id', async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.id })
    res.redirect(link.from)
  } catch (error) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})

module.exports = router