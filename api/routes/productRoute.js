'use strict';
module.exports = function(app) {
	var product = require('../controllers/productController');
  	app.route('/product').get(product.list);
};
