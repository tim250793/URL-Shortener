const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const ShortUrl = require('./models/shortUrls')
const urlgenerator = require('./urlgenerator')
const PORT = 3000
const app = express()


//connect to database
const connectDB = require('./config/mongoose')
connectDB();

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

  let shorted = urlgenerator()
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

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null)
    return res.sendStatus(404)

  res.redirect(shortUrl.full)

})


app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
