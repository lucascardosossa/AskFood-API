var bookshelf = require('../../dbconnection');

var User = bookshelf.Model.extend({
    tableName: 'user'
});
module.exports = User;