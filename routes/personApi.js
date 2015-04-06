var bodyParser = require('body-parser');
var person = require('../models/person');


module.exports = function(app , express){
    var apiRouter = express.Router();

    apiRouter.route('/people')
        .get(function(req, res){
            person.find().exec(function(err, people){
                res.json(people);
            });
        })
        .post(function(req, res){
            var newPerson = new person({name: req.body.name});
            newPerson.save(function(err){
               if(err) console.error(err);
                res.json({success: true});
            });
        });

    apiRouter.route('/people/:id')
        .get(function(req, res){
            person.findById(req.params.id).exec(function(err, p){
                res.json(p);
            });
        })
        .put(function(req, res){
            console.log('id: '+ req.params.id);
        })

    return apiRouter;
}
