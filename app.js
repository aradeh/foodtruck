const apiCallRequest = require('./get-api-data');
const currentDayTime = require('./get-current-daytime');
const http = require('http');

http.createServer((req,res) => {
    if(req.url === "/getfoodtruck"){
        apiCallRequest.callApi(function(response){
            let truckObj = [];
            //console.log(currentDayTime.nowDayTime);
            for(i in response){
                if(response[i].dayofweekstr == currentDayTime.nowDayTime.day && currentDayTime.nowDayTime.time >= response[i].start24 &&  currentDayTime.nowDayTime.time <=response[i].end24){
                    truckObj.push(response[i]);
                }
            }

            truckObj.sort(function (a,b){ 
                return a.applicant > b.applicant;
            });

            res.write(JSON.stringify(truckObj,null,'\t'));
            //res.write(response);
            res.end();
        });
    }
}).listen(3000);



console.log("server running on port 3000.");
//console.log(truckObj);