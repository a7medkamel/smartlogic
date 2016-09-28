/*
@title Hello World!
*/

var rp = require('request-promise');

module.exports = function(req, res, next) {
  res.end(req.headers);
  // rp
  //   .get(`http://freegeoip.net/json/${req.ip}`)
  //   .then((result) => {
  //     if (result.country_code === 'US') {
  //       res.send({ error : 'You are not allowed to Sign from the US' }).
  //     }
      
  //     res.send();
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
};
