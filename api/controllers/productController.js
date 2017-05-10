'use strict';
var Product = require('../models/productModel')

exports.list = function(req, res) {
    Product.getAll(function(err,rows){
    		if(err)
    			res.json(err);
    		else
    			res.json(rows);
    });
};