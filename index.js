const express = require('express');
var app = express();
app.get('/',function(req, res){
    res.status(200).send({status:1});
});

app.listen(3000,function(err,result){
    console.log('server is listenging on ',3000);
});