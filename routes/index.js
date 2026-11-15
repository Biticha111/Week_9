const express = require('express')
const router = express.Router()
const Feedback = require('../models').feedback

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Student Feedback', author: 'Belay' })
})

router.get('/feedback_form', function (req, res, next) {
  res.render('student_feedback_form')
})

router.post('/submit_feedback', function (req, res, next) {
  const formData = req.body
  console.log(formData)

  Feedback.create(formData)
      .then(function () {     // this code will run if the feedback is saved
        res.render('thank_you', { ...formData })
      })
      .catch(function (err) {
        res.locals.message = 'Error saving feedback. Please try again.'
          next(error)
      }) //
})

module.exports = router
