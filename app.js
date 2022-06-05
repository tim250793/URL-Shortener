const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const exphbs = require('express-handlebars')
const ShortUrl = require('./models/shortUrls')
const shortenid= require('./urlgenerator')
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
app.get('/', async(req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', {shortUrls: shortUrls})
})

app.post('/shortUrls', (req, res) => {

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
