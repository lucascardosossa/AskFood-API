'use strict';
var express = require('express')
    , router = express.Router();
var user = require('../controllers/userController');

router.get('/', user.list);
router.post('/login', user.login);

module.exports = router;

