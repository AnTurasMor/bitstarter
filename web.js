var express = require('express');

var app = express.createServer(express.logger());

var bufr = new Buffer(20) ;
var strn = new String(20) ;

bufr=fs.readFileSync("index.html");
strn = buf.toString(bufr);

app.get('/', function(request, response) {
  response.send(strn);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
