var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = `mongodb://acme:password@ds041546.mlab.com:41546/hackathon?authSource=hackathon`;

module.exports = function(req, res, next){
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    db.collection('Account').findOne({ AccountName : req.query.name }, function(err, account) {
      res.send({
        valid: account !== null,
        message: 'Account name not found in database',
        model: account
      });
      db.close();
    });
  });
};