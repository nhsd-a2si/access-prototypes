var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})





// Branching

router.get('/pharma-details', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaDetails

  if (compare === 'false') {
    // redirect to the relevant page
    res.redirect('/edit-pharma-details')
  } else {
    // if function is any other value (or is missing) render the page requested
    res.render('review-pharma-hours')
  }
})



router.get('/pharma-hours', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaHours

  if (compare === 'false') {
    // redirect to the relevant page
    res.redirect('/edit-pharma-hours')
  } else {
    // if function is any other value (or is missing) render the page requested
    res.render('review-pharma-holidays')
  }
})




router.get('/pharma-hols', function (req, res) {
  // get the answer from the query string 
  var compare = req.query.reviewPharmaHols

  res.render('review-pharma-servicehours')
})



//make sure the nhs login email is picked up as data to playback
router.get('/nhslogin', function (req, res) {
  var compare = req.query.nhsmail

  res.render('verify-email')
})



module.exports = router
