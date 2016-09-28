/*
@title Example Email send
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from TaskMill"
}
*/

module.exports = function(req, res, next){
  var result = { 
    message: 'Valid', 
    valid: true 
  };
  var bodyVal = req.body;
  if (bodyVal.value == "invalid") {
    result.value = false;
    result.message = "Supply a valid value";
  }
  res.send(result);

  /*
  this.email({
        to      : 'aaron.wald@docusign.com'
      , from    : 'aaron.wald@docusign.com'
      , subject : 'subject: ' + req.url
      , text    : JSON.stringify({ headers : req.headers, body : req.body })
    })
    .then((result) => res.send(result))
    */
};
