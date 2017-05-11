var bookshelf = require('../../dbconnection');

var User = bookshelf.Model.extend({
    tableName: 'user',
});

// var db=require('../../dbconnection'); //reference of dbconnection.js

// var User={

// 	getAllUsers:function(callback){
// 		return db.query("Select * from Users",callback);
// 	},
// 	 getUserById:function(id,callback){
// 		return db.query("select * from Users where Id=?",[id],callback);
// 	 },
// 	 getUserByCredentials:function(User,callback){
// 		return db.query("select * from Users where Name=? and Password = ?",[User.Name,User.Password],callback);
// 	 },
// 	 addUser:function(User,callback){
// 	 	return db.query("Insert into User values(?,?,?)",[User.Id,User.Name,User.Password],callback);
// 	 },
// 	 deleteUser:function(id,callback){
// 	  	return db.query("delete from Users where Id=?",[id],callback);
// 	 },
// 	 updateUser:function(id,User,callback){
// 	  	return db.query("update User set Name=?,Password=? where Id=?",[User.Name,User.Password,id],callback);
// 	 }

// };
module.exports = User;