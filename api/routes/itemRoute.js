'use strict';
var express = require('express')
    , router = express.Router();
var item = require('../controllers/itemController');

router.get('/', item.list);
router.get('/byProduct/:product_id', item.byProduct);

module.exports = router;