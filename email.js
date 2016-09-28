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
        to      : 'ahmed.kamel@gmail.com'
      , from    : 'ahmed.kamel@gmail.com'
      , subject : 'subject: ' + req.url
      , text    : JSON.stringify({ headers : req.headers, body : req.body })
    })
    .then((result) => res.send(result))
};