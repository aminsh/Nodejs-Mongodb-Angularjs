var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    console.log('Time : '+ Date.now());
    next();
});

app.set('views', __dirname + '/views');
    app.engine('html', require('ejs').renderFile);

app.use('/lib',express.static(__dirname+'/lib'));

app.get('/',function(req,res){
    res.render('./index.html');
});

app.get('/about',function(req,res){
    res.render('./about.html');
});

mongoose.connect('mongodb://localhost:27017/eShop');
var db = mongoose.connection;

db.on('error',function(error){
    console.error('mongodb connection error')
    console.error(error.toString());
});

db.once('open', function callback(){
    console.log('mongodb open');
});

var apiRoutes = require('./routes/personApi')(app, express);
app.use('/api', apiRoutes);

var people = [];
app.get('/people',function(req,res){
var data = [
                   {id: 1, name: 'name1'},
                   {id: 1, name: 'name1'},
                   {id: 1, name: 'name1'},
                   {id: 1, name: 'name1'},
               ];
               console.log(JSON.stringify(data));
    res.json(data);
});

app.post('/addPerson',function(req,res){

var person = req.body;
person.id = person.id * 100;
    people.push(person);
    res.json({result: 'success', data: people});
    //console.log(req);
});


app.listen(4000);

console.log('Port 4000 is listening ...');