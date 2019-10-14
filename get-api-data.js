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