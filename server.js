var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send(__dirname+'/index.html');
})

app.listen(processes.env.PORT||500,function(){
    console.log("server listening");
});