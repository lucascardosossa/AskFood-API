var mysql=require('mysql');
var connection=mysql.createPool({
    host: 'localhost',
	user     : 'root',
	password : '',
	database : 'chegou_pizza'
});
module.exports=connection;