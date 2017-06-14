'use strict';
var Item = require('../models/itemModel')

exports.list = function(req, res) {
    Item.fetchAll().then(function (collection) {
        res.json(collection.toJSON());
    }).catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
    });
};

exports.byProduct = function (req, res) {
    Item.where('product_id', req.params.product_id).fetchAll().then(function (collection) {
        res.json(collection.toJSON());
    }).catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
    });
};