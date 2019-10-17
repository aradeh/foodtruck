const apiCallRequest = require('./get-api-data');
const currentDayTime = require('./get-current-daytime');
const http = require('http');
const jsdom = require('jsdom').JSDOM;

let truckObj = [];
let start = 0;

http.createServer((req,res) => {
    if(req.url === "/getfoodtruck"){
        apiCallRequest.callApi(function(response){
            console.log(currentDayTime.nowDayTime);
            for(i in response){
                if(response[i].dayofweekstr == currentDayTime.nowDayTime.day && currentDayTime.nowDayTime.time >= response[i].start24 &&  currentDayTime.nowDayTime.time <=response[i].end24){
                    addObj(response[i].applicant, response[i].location);
                }
            }
            
            //sorting alphabetically with applicant name field
            truckObj.sort((a,b) => a.name.localeCompare(b.name));

            //output JSON
            res.write(
                JSON.stringify(truckObj,null,'\t')
            );

            // printing the result on browser
            // 10 results each time the page is refreshed.
            // var jsonLength = truckObj.length;
            // var j=1;
            // for(var i  = start;i<jsonLength;i++){
            //     j++;
            //     res.write(
            //         JSON.stringify(truckObj[i],null,'\t')
            //     );
            //     if(j === 10){break;}
            //     else if(j === jsonLength){
            //         res.end();
            //     }
            // }
            // start = i;


            //display(truckObj);
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