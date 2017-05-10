var db=require('../../dbconnection'); //reference of dbconnection.js
 
var Product={
 
	getAll:function(callback){
		return db.query("Select * from Product",callback);	 
	},
	 getProductById:function(id,callback){
		return db.query("select * from Product where Id=?",[id],callback);
	 },
	 addProduct:function(Product,callback){
	 	return db.query("Insert into Product values(?,?,?)",[Product.Id,Product.Name,Product.Description],callback);
	 },
	 deleteProduct:function(id,callback){
	  	return db.query("delete from Product where Id=?",[id],callback);
	 },
	 updateProduct:function(id,Product,callback){
	  	return db.query("update Product set Name=?,Description=? where Id=?",[Product.Name,Product.Description,id],callback);
	 }
 
};
 module.exports=Product;