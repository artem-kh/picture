var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var mongojs = require('mongojs');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var db = mongojs('contactlist', ['contactlist']);


//var db = mongoose.connect('mongodb://localhost/contactlist');

var app = express();


var routes = require('./routes/index');
var users = require('./routes/users');
var apl = require('./routes/apl');


//app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/apl', apl);


app.get('/contactlist', function(req, res){
    db.contactlist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});


app.post('/contactlist', function(req, res){
    console.log(res);
    db.contactlist.insert(req.body, function(err, doc){
        res.json(doc);
    })
});


app.delete('/contactlist/:id', function(req, res){
    var id = req.params.id;

    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    })
});


app.put('/contactlist/:id', function(req, res){
    var id = req.params.id;

    db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
            update: {$set: {id: req.body.id, parent_id: req.body.parent_id}},
            new: true}, function(err, doc){
            res.json(doc);
        }
    )
})

//app.use(bodyParser.urlencoded({'extended':'true'}));
//app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



//app.post('/contactlist', function(req, res) {
//
//  // create a todo, information comes from AJAX request from Angular
//  Todo.create({
//    text : req.body.text,
//    done : false
//  }, function(err, todo) {
//    if (err)
//      res.send(err);
//
//    // get and return all the todos after you create another
//    Todo.find(function(err, todos) {
//      if (err)
//        res.send(err)
//      res.json(todos);
//    });
//  });
//
//});
//
//app.delete('/contactlist:todo_id', function(req, res) {
//  Todo.remove({
//    _id : req.params.todo_id
//  }, function(err, todo) {
//    if (err)
//      res.send(err);
//
//    // get and return all the todos after you create another
//    Todo.find(function(err, todos) {
//      if (err)
//        res.send(err);
//      res.json(todos);
//    });
//  });
//});



module.exports = app;
