const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) { 
  res.render('index', {
    title: 'Student Feedback',
    author: 'Belay',
    timePageLoaded: new Date() // FIX: Replaced toLocaleString() with a Date object for better Handlebars rendering
  })
})

router.get('/student_feedback_form', function(req, res, next) {
  res.render('student_feedback_form')
})

router.post('/submit_feedback', function(req, res, next) {
  const formData = req.body 
  console.log(formData) 

  // FIX: Added missing return / end statement to prevent hanging requests if execution logic changes
  res.render('thank_you', { 
    name: formData.name,
    email: formData.email,
    comments: formData.comments,
    currentStudent: formData['current student']
  })  
}) // FIX: Cleaned up messy spacing and brackets here

module.exports = router
