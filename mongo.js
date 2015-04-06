
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/eShop');
var db = mongoose.connection;

db.on('error',function(error){
    console.log('Error ....');
    console.log(error);
});

db.once('open', function callback(){
    console.log('open');
});

var PersonSchema = new Schema({
    firstName: String,
    lastName: String,
    address: {
        address: String,
        city: String
    }
});

var personModel = mongoose.model('Person', PersonSchema);

personModel.findOne({'firstName': 'hossein'}).exec(function(err, person){
    if(err) console.error(err);
    else{
        console.info(person._id,'first name : ' + person.firstName + 'last name :' + person.lastName + 'address: '+ person.address.address+ 'city: '+ person.address.city);
    }
});

personModel.find().exec(function(err, data){
    if(err) console.log(err);

});
//var ali = new personModel({firstName: 'ali', lastName: 'hassanzasde',
//    address: {address: 'pasdaran', city: 'tenran'}});
//ali.save(function(err){
//    if(err) console.error(err);
//    else console.info('saved ....');
//});

//personModel.create({
//    firstName: 'amin',
//    lastName: 'sheikhi'
//}, function(){
//    console.log(personModel.find());
//});



