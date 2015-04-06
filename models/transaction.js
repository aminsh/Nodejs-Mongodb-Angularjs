var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var costSchema = new Schema({
    account: {},
    costGroup: {},
    amount: Number,
    date: Date
});

var incomeSchema = new Schema({
    account: {},
    incomeGroup: {},
    amount: Number,
    date: Date
});

module.exports = {
    cost: mongoose.model('Cost', costSchema),
    income: mongoose.model('Income', incomeSchema)
};

//var AcoountToPersonSchame = new Schema({
//    from: {},
//    to: {},
//    amount: Number,
//    date: Date
//});
