var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller')

/* GET home page. */
 
router.post('/insert',user.register_user);

module.exports = router;
