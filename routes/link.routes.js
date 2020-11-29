const { Router } = require('express')
const router = Router()
const Link = require('../models/Link')

router.post('/generate', async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})
router.post('/', async (req, res) => {
  try {
    const links = await Link.find({ owner: null })
    res.json(links)
  } catch (error) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})
router.post('/:id', async (req, res) => {
  try {
    const link = await Link.findById(req.params.id)
    res.json(link)
  } catch (error) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})

module.exports = router