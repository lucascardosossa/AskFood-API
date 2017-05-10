'use strict';
module.exports = function(app) {
	var item = require('../controllers/itemController');
  	app.route('/item').get(item.list);
};
