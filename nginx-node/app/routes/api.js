var express = require('express');
var router = express.Router();

/* GET home page. */

// router.get('/', function(req, res, next) {
//   res.send('No flag here');
// });

router.get('/users', function(req, res, next) {
  res.send('No flag here');
});

module.exports = router;
