var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nitin', function(req, res, next) {
  res.render('index', { title: 'Express',welcome:'madrid classes' });
});
router.get('/ritik', function(req, res, next) {
  res.send("ritik");
});

module.exports = router;


// get post delete put patch
