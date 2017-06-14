/**
 * Created by lucas on 12/05/2017.
 */
var express = require('express')
    , router = express.Router();
var User = require('../models/userModel');
var jwt = require('jsonwebtoken');
var app = require('../../server');


router.get('/', function (req, res) {
    res.send('Home page')
});

router.post('/authenticate', function(req, res) {
  User.where({name: req.body.name, password: req.body.password}).fetch().then(function(user) {
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
        try{
            var token = jwt.sign(user, app.settings.superSecret, {
            
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });  
        }
        catch(err){
            res.json(err);
        }
    }

  }).catch(function (err) {
      throw err;
  });
});

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.settings.superSecret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});

router.use('/user', require('./userRoute'));
router.use('/product', require('./productRoute'));
router.use('/item', require('./itemRoute'));

module.exports = router;