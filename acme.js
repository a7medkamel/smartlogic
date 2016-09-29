var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = `mongodb://acme:password@ds041546.mlab.com:41546/hackathon?authSource=hackathon`;

module.exports = function(req, res, next){
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    db.collection('Account').find({ _id : req.query.opportunity_id }).toArray(function(err, items) {
      res.send(items);
      db.close();
    });
  });
};