const express = require('express')
const app = express()
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('port') || 5001

async function start() {
  await mongoose.connect(config.get('dbURI'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  app.listen(5000, () => {
    console.log('Server has started on port '+PORT)
  })
}
  
start()
