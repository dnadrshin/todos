var mongoose    = require('mongoose');
var log         = require('./log')(module);


mongoose.connect('mongodb://localhost/');

var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});

var Schema = mongoose.Schema;

var ToDo = new Schema({
    task: { type: String, required: true }
});

// validation
/*Article.path('title').validate(function (v) {
    return v.length > 5 && v.length < 70;
});*/

var ToDoModel = mongoose.model('ToDo', ToDo);

module.exports.ToDoModel = ToDoModel;