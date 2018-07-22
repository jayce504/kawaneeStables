var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kawanee Stables' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Who We Are' });
});

/* GET farm page. */
router.get('/facility', function(req, res, next) {
  res.render('facility', { title: 'Our Facility' });
});


module.exports = router;
