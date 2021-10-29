var express = require('express');
require("dotenv").config();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { time: process.env.npm_config_time });
});

module.exports = router;
