const apiCallRequest = require('./get-api-data');
const currentDayTime = require('./get-current-daytime');
const http = require('http');
var pagination = require('pagination');

let truckObj = [];

http.createServer((req,res) => {
    if(req.url === "/getfoodtruck"){
        apiCallRequest.callApi(function(response){
            console.log(currentDayTime.nowDayTime);
            for(i in response){
                if(response[i].dayofweekstr == currentDayTime.nowDayTime.day && currentDayTime.nowDayTime.time >= response[i].start24 &&  currentDayTime.nowDayTime.time <=response[i].end24){
                    addObj(response[i].applicant, response[i].location);
                }
            }
            var paginator = pagination.create('search', {prelink:'/', current: 1, rowsPerPage: 10, totalResult: 100});
            console.log("PAGE");
            console.log(paginator.render());
            //sorting alphabetically with applicant name field
           // truckObj.sort((a,b) => a.name.localeCompare(b.name));

            res.write(
                JSON.stringify(truckObj,null,'\t')
            );
            console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------");
            //console.log(JSON.stringify(truckObj,null,'\t'));
            res.end();
        });
    }
}).listen(3000);

function addObj(applicant, address){
    return truckObj.push({
        "name" : applicant,
        "address": address
    });
}

console.log("server running on port 3000.");
//console.log(truckObj);