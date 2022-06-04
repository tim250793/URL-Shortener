const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})
 
app.listen(process.env.PORT || 3000)


