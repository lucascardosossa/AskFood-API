'use strict';
var Item = require('../models/itemModel')

exports.list = function(req, res) {
    Item.getAll(function(err,rows){
    		if(err)
    			res.json(err);
    		else
    			res.json(rows);
    });
};