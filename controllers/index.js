var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/login', function(req, res){
   console.log("hello");
});

module.exports = router;