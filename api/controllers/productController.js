'use strict';
var Product = require('../models/productModel')

exports.list = function(req, res) {
    Product.fetchAll().then(function (collection) {
        res.json(collection.toJSON());
    }).catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
    });
  
};