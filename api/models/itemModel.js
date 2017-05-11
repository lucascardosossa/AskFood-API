//var db=require('../../dbconnection'); //reference of dbconnection.js

var bookshelf = require('../../dbconnection');

var Item = bookshelf.Model.extend({
    tableName: 'item',
    Product: function () {
        return this.belongsTo(Product);
    }
});


// var Item={

// 	getAll:function(callback){
// 		return db.query("Select * from Item",callback);
// 	},
// 	 getItemById:function(id,callback){
// 		return db.query("select * from Item where Id=?",[id],callback);
// 	 },
// 	 addItem:function(Item,callback){
// 	 	return db.query("Insert into Item values(?,?,?)",[Item.Id,Item.Name,Item.Description],callback);
// 	 },
// 	 deleteItem:function(id,callback){
// 	  	return db.query("delete from Item where Id=?",[id],callback);
// 	 },
// 	 updateItem:function(id,Item,callback){
// 	  	return db.query("update Item set Name=?,Description=? where Id=?",[Item.Name,Item.Description,id],callback);
// 	 }

// };
module.exports = Item;