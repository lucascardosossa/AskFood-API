'use strict';
var express = require('express')
    , router = express.Router();
var product = require('../controllers/productController');

router.get('/', product.list);

module.exports = router;