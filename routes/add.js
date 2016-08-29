var express = require('express');
var router = express.Router();
var log = require('../libs/log')(module);
var ToDoModel    = require('../libs/mong').ToDoModel;

/* GET home page. */
router.get('/', function(req, res, next) {
	var tasks = [];
	ToDoModel.find({}, function (err, docs) {
	  		console.log(docs);
	  		tasks = docs;

	  		res.render('add', { title: 'Add todo', tasks: tasks });
		});

  	
});


module.exports = router;
