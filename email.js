/*
@title Example Email send
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from TaskMill"
}
*/

module.exports = function(req, res, next){
  this.email({
        to      : 'wassup+test@gmail.com'
      , from    : 'wassup@gmail.com'
      , subject : 'subject: ' + req.url
      , text    : JSON.stringify({ body : req.body })
    })
    .then((result) => res.send(result))
};
