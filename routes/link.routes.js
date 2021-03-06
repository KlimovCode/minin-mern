const { Router } = require('express')
const router = Router()
const config = require('config')
const shortid = require('shortid')

const Link = require('../models/Link')
const auth = require('../middleware/auth.middleware')

router.post('/generate', auth, async (req, res) => {
  try {
    const baseUrl = config.get('baseUrl')
    const { from } = req.body

    // const existing = await Link.findOne({ from })
    // if (existing) return res.json({ link: existing })

    const code = shortid.generate()
    const to = baseUrl + '/t/' + code
    const link = new Link({
      code, to, from, owner: req.user.userId
    })

    await link.save()
    res.status(201).json({ link })

  } catch (error) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})
router.get('/', auth, async (req, res) => {
  console.log(req.user);

  try {
    const links = await Link.find({ owner: req.user.userId })
    res.json(links)
  } catch (error) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})
router.get('/:id', auth, async (req, res) => {
  try {
    const link = await Link.findById(req.params.id)
    res.json(link)
  } catch (error) {
    res.status(500).json({ msg: 'something went wrong' })
  }
})

module.exports = router
