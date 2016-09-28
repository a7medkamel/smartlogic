var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = `mongodb://acme:password@ds041546.mlab.com:41546/hackathon?authSource=hackathon`;

module.exports = function(req, res, next){
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    db.collection('Opportunity').findOne({ _id : req.query.opportunity_id }, function(err, opportunity) {
      db.collection('Account').findOne({ _id : opportunity.AccountID }, function(err, account){
        res.send({
          opportunity : opportunity,
          account     : account
        });
      });
      db.close();
    });
  });
};