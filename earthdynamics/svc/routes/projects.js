var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('projectdb', server);
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'projectdb' database");
        db.collection('projects', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'projects' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});
 
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving project: ' + id);
    db.collection('projects', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('projects', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
exports.addWine = function(req, res) {
    var wine = req.body;
    console.log('Adding project: ' + JSON.stringify(wine));
    db.collection('projects', function(err, collection) {
        collection.insert(wine, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
 
exports.updateWine = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    console.log('Updating project: ' + id);
    console.log(JSON.stringify(wine));
    db.collection('projects', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating project: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(wine);
            }
        });
    });
}
 
exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting project: ' + id);
    db.collection('projects', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
 
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
    
    var projects = [
        {
            title : 'Project 1',
            location: {
                city: 'Coventry',
                state: 'CT',
                postalCode: 06238
            },
            description : 'This is project 1.',
            startDate: '1/1/2012',
            endDate: '1/2/2012'
        },
        {
            title : 'Project 2',
            location: {
                city: 'Coventry',
                state: 'CT',
                postalCode: 06238
            },
            description : 'This is project 2.',
            startDate: '5/1/2012',
            endDate: '8/2/2012'
        }
    ];
 
    db.collection('projects', function(err, collection) {
        collection.insert(projects, {safe:true}, function(err, result) {});
    });
 
};