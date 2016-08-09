var fs = require('fs');

var csv = require('fast-csv');

fs.createReadStream("August_2016.csv")
    .pipe(csv())
    .on('data', function(data) {
        var strArray = data[2].split("<campaign>");
        strArray = strArray[1] ? strArray[1].split("</campaign>") : [""];
        // console.log(strArray[0]);
        console.log(data[0] + "," + data[1] + "," + strArray[0] + ","+ data[2]);
        //console.log('\n\r\n\r');
    })
    .on('end', function(data) {
        //console.log('Read finished.');
    });