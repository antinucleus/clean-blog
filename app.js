const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

const PORT = 3001

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/add_post', (req, res) => {
  res.render('add_post')
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
