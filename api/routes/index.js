var express = require('express');
var router = express.Router();
const gitController = require('../src/Controllers/GitController')
    /* GET home page. */
router.get('/', function(req, res, next) {
    gitController.consult(req, res);
});

module.exports = router;