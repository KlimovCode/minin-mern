const express = require('express')
const app = express()
const config = require('config')
const mongoose = require('mongoose')

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 5001

async function start() {
  try {
    await mongoose.connect(config.get('dbURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(5000, () => {
      console.log('Server has started on port '+PORT)
    })
  } catch(e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}
  
start()
