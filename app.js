const express = require('express')
const app = express()
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/short.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = config.get('port') || 5002

async function start() {
  try {
    await mongoose.connect(config.get('dbURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => {
      console.log('Server has started on port ' + PORT)
    })
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()
