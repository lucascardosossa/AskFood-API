'use strict';
var express = require('express')
    , router = express.Router();
var item = require('../controllers/itemController');

router.get('/', item.list);
router.post('/byProduct', item.byProduct);

module.exports = router;