const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

const PORT = 3001

app.get('/', (req, rep) => {
  rep.sendFile(path.resolve(__dirname, 'temp/index.html'))
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
