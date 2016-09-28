module.exports = function(req, res, next){
  var sampleValidation = {
    message: 'Valid',
    status: true
  }
  res.send(sampleValidation)
};
