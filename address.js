/*
@title Validate Address
@input
{
  "content-type" : "application/json",
  "example" : { "tabs" : [{ "label" : "address_line1", "value" : "999 3rd Ave #1700"}, { "label" : "address_city", "value" : "Seattle"}, { "label" : "address_state", "value" : "WA"}, { "label" : "address_zip", "value" : "98104"}] }
}
*/

var Lob = require('lob')('test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc');
var _ = require('lodash')

module.exports = function(req, res, next){
  let tabs = _.get(req.body, 'tabs');
  
  let address_line1   = _.find(tabs, (o) => { return o.label == 'address_line1'; })
    , address_city    = _.find(tabs, (o) => { return o.label == 'address_city'; })
    , address_state   = _.find(tabs, (o) => { return o.label == 'address_state'; })
    , address_zip     = _.find(tabs, (o) => { return o.label == 'address_zip'; })
    ;
    
  console.log(typeof req.body, tabs, address_line1, address_city, address_state, address_zip)
  Lob.verification.verify({
    address_line1   : address_line1,
    address_city    : address_city,
    address_state   : address_state,
    address_zip     : address_zip
  }, function (err, result) {
    if (err) {
      res.send({ valid : false, message : _.get(err, '_response.body.error.message') })
    } else {
      res.send({ valid : true }); 
    }
  });
};