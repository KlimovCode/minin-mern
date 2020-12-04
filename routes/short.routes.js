const { Router } = require('express')
const router = Router()

const Link = require('../models/Link')

router.get('/:code', async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.code })
    // await Link.findByIdAndUpdate(link._id, { clicks: link.clicks + 1 })
    link.clicks++
    link.save()
    res.redirect(link.from)
  } catch (error) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})

module.exports = router