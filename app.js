const apiCallRequest = require('./get-api-data');
const http = require('http');

http.createServer((req,res) => {
    if(req.url === "/getfoodtruck"){
        apiCallRequest.callApi(function(response){
            res.write(JSON.stringify(response));
            //res.write(response);
            res.end();
        });
    }
}).listen(3000);

console.log("server running on port 3000.");