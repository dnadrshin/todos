var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


/*	var article = new ArticleModel({
        title: 'article name',
        author: 'Pushkin',
        description: 'some text',
        images: 'no img'
    });
	article.save(function (err) {
		console.log(err)
	})*/

/*	ArticleModel.find({ 'title': 'article name' }, function (err, docs) {
  		console.log(docs)
	});*/
	res.send('respond with a resource');
});

module.exports = router;
