const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

function convertCSVtoJSON(url = './customer-data.csv') {
  fs.readFile(url, 'utf8', function(err, data) {
    if(err) {
      return console.error(err);
    }
    const fileName = url.replace('.csv', '.json');
    csv()
    .fromString(data)
    .on('end_parsed', (jsonArrObj)=> {
      fs.writeFileSync(path.join(__dirname, fileName), JSON.stringify(jsonArrObj, null, 2));
    });
  });
}

convertCSVtoJSON(process.argv[2]);