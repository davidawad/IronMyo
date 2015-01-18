// usage: node historicalDataRequest.js <host>                                   
var https = require('https');
var fs = require('fs');
var host = process.argv[2] || '54.174.49.59';
var port = 443
    var options = {
    host: host,
    port: port,
    path: '/request/blp/refdata/HistoricalData',
    method: 'POST',
    key: fs.readFileSync('pennapps_spring_2015_040.key'),
    cert: fs.readFileSync('pennapps_spring_2015_040.crt'),
    ca: fs.readFileSync('bloomberg.crt')
};

var req = https.request(options, function(res) {
        //console.log("statusCode: ", res.statusCode);                           
        //console.log("headers: ", res.headers);                                 
        var data = "";
        res.on('data', function(d) {
                data +=d;
            });

    res.on('end', function() {
        data = JSON.parse(data);
        var sessionId =    data.sessid;
        console.log(data.data[0].securityData.fieldData[0].OPEN);
        fs.writeFile("ex.txt", data.data[0].securityData.fieldData[0].OPEN);

            });
    });
req.write(JSON.stringify( {
            "securities": ["2480 TT Equity"],
                "fields": ["OPEN"],
                "startDate": "20150112",
                "endDate": "20150117",
                "periodicitySelection": "DAILY"
                }));
req.end();

req.on('error', function(e) {
        console.error(e);
    });