const express = require('express') 
const path = require('path') 
const indexRouter = require('./routes/index') // Import the index router from the routes folder

const app = express() 

// Middleware setup
app.use(express.urlencoded({extended: true})) // This middleware is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property. The extended option allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.

// View engine setup
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'hbs') // Set Handlebars as the view engine

// Static files
const staticFileLocation = path.join(__dirname, 'Public') // Note: Ensure your actual folder capitalizes 'Public'
app.use(express.static(staticFileLocation)) 

// Routes
app.use('/', indexRouter) // Use the index router for the root path

// Server startup
const server = app.listen(process.env.PORT || 3000, function() { // Start the server on the specified port or default to 3000
    console.log('Server running on port', this.address().port) 
}) 

module.exports = app // Export the app for testing or further usage
