const express = require('express') 
const path = require('path') 
const indexRouter = require('./routes/index') // FIX: Adjusted path to match your comment line

const app = express() 

// Middleware
app.use(express.urlencoded({extended: true})) 

// View engine setup
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'hbs') 

// Static files
const staticFileLocation = path.join(__dirname, 'Public') // Note: Ensure your actual folder capitalizes 'Public'
app.use(express.static(staticFileLocation)) 

// Routes
app.use('/', indexRouter) 

// Server startup
const server = app.listen(process.env.PORT || 3000, function() { 
    console.log('Server running on port', this.address().port) 
}) 

module.exports = app
