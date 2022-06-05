const mongoose = require('mongoose')
const ShortUrl = require('../shortUrls')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')  


    for (let i = 0; i < 10; i++) {
        ShortUrl.create({full:`full-${i}`})
    }
    console.log('done')
  
})
