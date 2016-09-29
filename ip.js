/*
@title Hello World!
*/

var rp = require('request-promise');
var _ = require('lodash');

module.exports = function(req, res, next) {
  let ip = req.headers['x-forwarded-for'];
  let blacklist = ['US'];
  rp
    .get(`http://freegeoip.net/json/${ip}`, { json : true })
    .then((result) => {
      if (_.find(blacklist, (o) => { return o == result.country_code })) {
        res.send({ error : `You are not allowed to Sign from the ${result.country_code}` });
      } else {
        res.end();
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};