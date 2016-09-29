/*
@title Validate asset_id
@input
{
  "content-type" : "application/json",
  "example" : { "tabs" : [{ "label" : "account_name", "value" : "Express Logistics and Transport"}] }
}
*/

var MongoClient = require('mongodb').MongoClient;
var _ = require('lodash');

// Connection URL
var url = `mongodb://acme:password@ds041546.mlab.com:41546/hackathon?authSource=hackathon`;

module.exports = function(req, res, next) {
  let tabs = _.get(req.body, 'tabs');
  
  let account_name = _.get(_.find(tabs, (o) => { return o.label == 'account_name'; }), 'value');

  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    db.collection('Account').findOne({ AccountName : account_name }, function(err, account) {
      res.send({
        valid: account !== null,
        message: 'Account name not found in database',
        model: account
      });
      db.close();
    });
  });
};