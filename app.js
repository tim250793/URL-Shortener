const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const ShortUrl = require('./models/shortUrls')
const shortenid = require('./urlgenerator')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

//db connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

//view engine
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

//routes
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find().limit(10)
  console.log(shortUrls)

  res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
  let shorted = shortenid()
  let fullUrl = req.body.fullUrl

  console.log(await ShortUrl.findOne({ full: fullUrl }))

  if (await ShortUrl.findOne({ full: fullUrl }) === null) {
    await ShortUrl.create([{
      "full": fullUrl,
      "short": shorted
    }]);
  }
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
