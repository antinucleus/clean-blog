const express = require('express')
const mongoose = require('mongoose')

const Post = require('./models/Post')

const app = express()

const DB_ADDRESS = 'mongodb://localhost:27017/'
const DB_NAME = 'cleanblog-test-db'

const uri = `${DB_ADDRESS}${DB_NAME}`

mongoose.connect(uri, (error) => {
  if (error) {
    console.log('Error occured while connecting to DB :\n', error)
  } else {
    console.log('Database connection is successful\n')
  }
})

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = 3001

app.get('/', async (req, res) => {
  const posts = await Post.find({})

  res.render('index', { posts })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/add_post', (req, res) => {
  res.render('add_post')
})

app.post('/add_post', async (req, res) => {
  const { body } = req

  await Post.create(body)
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
