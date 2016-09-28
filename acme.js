var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = `mongodb://acme:password@ds041546.mlab.com:41546/?authSource=hackathon`;

module.exports = function(req, res, next){
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    // todo [akamel] read some data
    res.end();
    db.close();
  });
};