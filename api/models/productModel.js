var bookshelf = require('../../dbconnection');

var Product = bookshelf.Model.extend({
    tableName: 'product',
    items: function () {
        return this.hasMany(Item);
    }
});

module.exports = Product;