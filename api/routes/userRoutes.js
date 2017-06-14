'use strict';
module.exports = function(app) {
	var user = require('../controllers/userController');
  	var product = require('../controllers/productController');
  	
  	// user Routes
  	app.route('/user').get(user.list);
  	app.route('/user/login').post(user.login);
  	app.route('/product').get(product.list);
};
