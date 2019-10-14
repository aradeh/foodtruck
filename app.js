const apiCallRequest = require('./get-api-data');
const currentDayTime = require('./get-current-daytime');
const http = require('http');

http.createServer((req,res) => {
    if(req.url === "/getfoodtruck"){
        apiCallRequest.callApi(function(response){
            let truckObj = [];
            console.log(currentDayTime.nowDayTime);
            //console.log(currentDayTime.day);
            for(i in response){
                if(response[i].dayofweekstr == currentDayTime.nowDayTime.day && currentDayTime.nowDayTime.time >= response[i].start24 &&  currentDayTime.nowDayTime.time <=response[i].end24){
                    truckObj.push(response[i]);
                }
            }
            //res.write(JSON.stringify(response.dayofweekstr == "Monday"));
            res.write(JSON.stringify(truckObj));
            //res.write(response);
            res.end();
        });
    }
}).listen(3000);

console.log("server running on port 3000.");