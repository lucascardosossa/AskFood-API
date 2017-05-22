/**
 * Created by lucas on 12/05/2017.
 */
var express = require('express')
    , router = express.Router();

router.use('/user', require('./userRoute'));
router.use('/product', require('./productRoute'));
router.use('/item', require('./itemRoute'));

router.get('/', function (req, res) {
    res.send('Home page')
});

router.get('/about', function (req, res) {
    res.send('Learn about us')
});

module.exports = router;