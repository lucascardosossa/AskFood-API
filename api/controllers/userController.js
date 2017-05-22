'use strict';
var User = require('../models/userModel');

exports.list = function(req, res) {
    User.fetchAll().then(function (collection) {
        res.json(collection.toJSON());
    }).catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
    });
};

exports.login = function(req,res){
    User.where({name: req.body.name, password: req.body.password}).fetch().then(function (collection) {
        res.json({error: false, data: collection.toJSON()});
    }).catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
    });
};

