var express = require('express');
var server = express();


server.use(express.json());

server.listen(8000,function check(error)
{
    if(error){
        console.log("Error....")
    }
    else{
        console.log("Started.....")
    }
});