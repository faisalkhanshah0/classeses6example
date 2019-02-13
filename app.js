const http = require('http');


var server = http.createServer(function(req, res){
    res.write('hello world');
    res.write('hello world');
    res.end();
});

server.listen(3000,function(err, result){
    console.log('listening on port',3000);
});