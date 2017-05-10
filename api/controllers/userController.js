'use strict';
var User = require('../models/userModel')

exports.list = function(req, res) {
    User.getAllUsers(function(err,rows){
    		if(err)
    			res.json(err);
    		else
    			res.json(rows);
    });
};

exports.login = function(req,res){
	User.getUserByCredentials(req.body,function(err,rows){
			if(err)
    			res.json(err);
    		else{
    			if(rows.length == 0)
    				res.json(err);
    			else
    				res.json("ok");	
    		}
	});
};
// exports.create_a_User = function(req, res) {
//   var new_User = new User(req.body);
//   new_User.save(function(err, User) {
//     if (err)
//       res.send(err);
//     res.json(User);
//   });
// };


// exports.read_a_User = function(req, res) {
//   User.findById(req.params.UserId, function(err, User) {
//     if (err)
//       res.send(err);
//     res.json(User);
//   });
// };


// exports.update_a_User = function(req, res) {
//   User.findOneAndUpdate(req.params.UserId, req.body, {new: true}, function(err, User) {
//     if (err)
//       res.send(err);
//     res.json(User);
//   });
// };


// exports.delete_a_User = function(req, res) {


//   User.remove({
//     _id: req.params.UserId
//   }, function(err, User) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'User successfully deleted' });
//   });
// };
