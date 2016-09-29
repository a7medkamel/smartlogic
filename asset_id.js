/*
@title Validate asset_id
@input
{
  "content-type" : "application/json",
  "example" : { "tabs" : [{ "label" : "asset_id", "value" : "123"}] }
}
*/

var Lob = require('lob')('test_0dc8d51e0acffcb1880e0f19c79b2f5b0cc');
var _ = require('lodash')

module.exports = function(req, res, next){
  let tabs = _.get(req.body, 'tabs');
  
  let asset_id = _.get(_.find(tabs, (o) => { return o.label == 'asset_id'; }), 'value');
    
  if (asset_id == "123") {
    res.send({ valid : true }); 
  } else {
    res.send({ valid : false, message : 'Did you mean 123?' })
  }
};