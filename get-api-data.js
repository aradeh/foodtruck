const request = require('request');

_API_URL = 'https://data.sfgov.org/resource/jjew-r69b.json'; 

const callApiwithRequest = (callback) => {
    request(_API_URL, {json:true},(err,res,body) => {
        if(err){
            return callback(err);
        }
        return callback(body);
    });
}

module.exports.callApi = callApiwithRequest;



// import { Router } from 'express';
// var router = Router();
// import req from 'request';

/*
router.get('/', function(req,res,next){
    req({
        uri: 'https://data.sfgov.org/resource/jjew-r69b.json'
    },
    function(err,res,body){
        if(!err && res.statusCode ==200){
            console.log(JSON.parse(res));
            res.join(body);
        } else {
            res.join(err);
        }
    }
    );
});*/


/*
router.get("https://data.sfgov.org/resource/jjew-r69b.json", (error,response, body) => {
    if(error) {
        return console.dir(error);
    } else if(response.statusCode == 200){
        console.log(JSON.parse(body));
    }

} );
*/

//module.exports = router;


// var Request = require("request");


// Request.get("https://data.sfgov.org/resource/jjew-r69b.json", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     //console.log(JSON.parse(body));
// }).then(function(body) {

// }).catch(function (error) {

// }); 



// var truckObj;
// var axios = require('axios');

// axios.get('https://data.sfgov.org/resource/jjew-r69b.json').then(function (response){
//     truckObj = response;
//     // console.log(response);
// }).catch (function (error){
//     console.log("not able to get the API");
// });


//  console.log(truckObj);



//datetime comparision

// var currentDateTime = new Date(); //UTC
// //console.log(currentDateTime);
// var startHour = new Date();
// var endHour = new Date();

// var a = new Date("06:00");
// console.log("******" + a);

// var startgiven = parseInt('06:00');
// //console.log(startgiven);
// //startgiven = startgiven.split(':').join(',') + ",00";
// //console.log(parseInt(startgiven));


// startHour.setHours(Number(startgiven));

// //console.log(startHour);
// endHour.setHours(17,00,0);

// console.log("Compare Hours");
// console.log("current  -- " + currentDateTime.getUTCHours());
// console.log("start  -- " + startHour);
// console.log("end  -- " + endHour);
// if( currentDateTime >= startHour && currentDateTime <= endHour ){
//     console.log("yes current datetime is in between start and end time");
// } else {
//     console.log("no, not in start and end date");
// }


//DateTimeOffset.Parse(string).UtcDateTime


//------------------------------------------------------------------------------------------------------------------------
// const axios = require('axios');
// let truckj = [];
// async function makeGetRequest() {
//     var currentDateTime = new Date();
//     let res = await axios.get('https://data.sfgov.org/resource/jjew-r69b.json');

//     let data = res.data;
//     for (i in data){
//         if(currentDateTime>=data[i].start24 && currentDateTime <= data[i].end24){
//             truckj.push(data[i]);
//         }
//     }


  

  
//   //console.log(truckj);
//   //return data;
// }
// makeGetRequest();

// console.log("---------getting data------------");
// console.log(truckj);


//------------------------------------------------------------------------------------------------------------

// let truckObj;
// getLocally();

// async function getLocally(){
//     truckObj =  await makeGetRequest();
// }

// console.log(truckObj);

//data


// {
//     "dayorder": "5",
//     "dayofweekstr": "Friday",
//     "starttime": "10AM",
//     "endtime": "6PM",
//     "permit": "19MFF-00105",
//     "location": "773 MARKET ST",
//     "locationdesc": "Pushcart located on Market St. 7 linear feet West of the Fire Hydrant. Must maintain 8 linear feet clearance from Street Artist Booth M22. Reference Street Artist Map #14 (http://www.sfartscommission.org/street_artists_program/maps/index.html)",
//     "optionaltext": "Kettle Corn, Funnel Cakes, Lemonade, Beverages, Flan, Hot Dogs, Falafel, Hot and Cold Sandwiches, French Fries, Baklava and Pastries",
//     "locationid": "1341056",
//     "start24": "10:00",
//     "end24": "18:00",
//     "cnn": "8746103",
//     "addr_date_create": "2011-11-15T13:48:04.000",
//     "addr_date_modified": "2011-11-15T13:50:08.000",
//     "block": "3706",
//     "lot": "096",
//     "coldtruck": "N",
//     "applicant": "Kettle Corn Star",
//     "x": "6011164.82111",
//     "y": "2114324.40143",
//     "latitude": "37.786160934428665",
//     "longitude": "-122.40512731130576",
//     "location_2": {
//         "type": "Point",
//         "coordinates": [
//             -122.405127311306,
//             37.7861609344287
//         ]
//     }
// },