const express = require('express')
const app = express()
const config = require('config')

const PORT = config.get('port') || 5001

app.listen(5000, () => {
  console.log('Server has started on port '+PORT)
})
