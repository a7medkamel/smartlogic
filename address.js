/*
@title Validate Address
@input
{
  "content-type" : "application/json",
  "example" : { "tabs" : [{ "label" : "address_line1", "value" : "999 3rd Ave #1700"}, { "label" : "address_city", "value" : "Seattle"}, { "label" : "address_state", "value" : "WA"}, { "label" : "address_zip", "value" : "98104"}] }
}
*/

// robin: +14155162314 
// grant: +12069207788
// praveen: +13179188680

var Lob = require('lob')('test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc');
var _ = require('lodash')

module.exports = function(req, res, next){
  let tabs = _.get(req.body, 'tabs');
  
  let address_line1   = _.get(_.find(tabs, (o) => { return o.label == 'address_line1'; }), 'value')
    , address_city    = _.get(_.find(tabs, (o) => { return o.label == 'address_city'; }), 'value')
    , address_state   = _.get(_.find(tabs, (o) => { return o.label == 'address_state'; }), 'value')
    , address_zip     = _.get(_.find(tabs, (o) => { return o.label == 'address_zip'; }), 'value')
    ;
    
  Lob.verification.verify({
    address_line1   : address_line1,
    address_city    : address_city,
    address_state   : address_state,
    address_zip     : address_zip
  }, (err, result) => {
    if (err) {
      res.send({ valid : false, error : _.get(err, '_response.body.error.message'), message : `Address ${address_line1}, ${address_city} ${address_state} ${address_zip}, is not valid!` })
    } else {
      res.send({ valid : true });
      
      let numbers = ['+13179188680'];
      // let numbers = ['+13179188680', '+14155162314', '+12069207788'];
      _.each(numbers, (num) => {
        this.sms({
          'to'    : num,
          'body'  : `Congrats on Buying ${address_line1}`
        })
      });
    }
  });
};