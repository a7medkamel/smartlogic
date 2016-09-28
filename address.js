/*
*/

var Lob = require('lob')('test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc');

module.exports = function(req, res, next){
  Lob.verification.verify({
    address_line1: '185 Berry Street',
    address_city: 'San Francisco',
    address_state: 'CA',
    address_zip: '94107'
  }, function (err, res) {
    console.log (err, res);
    res.send(res);
  });
};

