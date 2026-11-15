const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// import the routes in routes/index.js
const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')

// Create the web application
const app = express()

// enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }))

// serve static files, such as CSS
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

// configure it to use the Handlebars template engine and
// work with template files in the views directory
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// make the routes in index.js available to the app
app.use('/', indexRouter)
app.use('/admin', adminRouter) // "mount" the routes in this file at /admin

app.use( function (err, res, next) {
    console.error(err.stack) //logs an error for the developer
    res.status(500).render('error') // renders user-friendly error page
})

// Start server running
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
