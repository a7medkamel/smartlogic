/*
@title Block IP!
*/

var rp = require('request-promise');
var _ = require('lodash');

module.exports = function(req, res, next) {
  let ip = req.headers['x-forwarded-for'];
  let blacklist = ['US'];
  // let blacklist = ['KP'];
  
  rp
    .get(`http://freegeoip.net/json/${ip}`, { json : true })
    .then((result) => {
      if (_.find(blacklist, (o) => { return o == result.country_code })) {
        res.send({ valid : false, message : `You are not allowed to Sign from ${result.country_name}` });
      } else {
        res.end();
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};