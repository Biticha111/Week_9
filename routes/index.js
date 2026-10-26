const express = require('express') // Import the Express library
const router = express.Router()

router.get('/', function(req, res, next) { // Define a route for the root path
  res.render('index', {
    title: 'Student Feedback', // Render the 'index' view and pass a title variable
    author: 'Belay',
    timePageLoaded: new Date() // Pass the current date and time to the view
  })
})

router.get('/student_feedback_form', function(req, res, next) { // Define a route for the student feedback form
  res.render('student_feedback_form')
})

router.post('/submit_feedback', function(req, res, next) { // Define a POST route to handle form submissions
  const formData = req.body 
  console.log(formData) 

  res.render('thank_you', {  // Render the 'thank_you' view and pass the submitted form data to it
    name: formData.name,
    email: formData.email,
    comments: formData.comments,
    currentStudent: formData['current student'] // Access the 'current student' field from the form data
  })  
}) // FIX: Cleaned up messy spacing and brackets here

module.exports = router // Export the router to be used in other parts of the application
