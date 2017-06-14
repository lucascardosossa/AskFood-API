//var db=require('../../dbconnection'); //reference of dbconnection.js

var bookshelf = require('../../dbconnection');

var Item = bookshelf.Model.extend({
    tableName: 'item',
    Product: function () {
        return this.belongsTo(Product);
    }
});

module.exports = Item;