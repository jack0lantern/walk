var sp = require('excel');
var fs = require('fs');
var result = [];
var x = sp('list3.xlsx', function(err, data) {
	if(err) throw err;
	console.log(data[0]);
});
/*var csv = require('csv-parser')
 
fs.createReadStream('list.csv')
  .pipe(csv())
  .on('data', function(data) {
	  console.log("print something"); 
    console.log('row', data)
  })
console.log(sp);*/
var XLSX = require('xlsx');
var workbook = XLSX.readFile('list3.xlsx');
//console.log("%j", workbook);

var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function(y) { /* iterate through sheets */
  var worksheet = workbook.Sheets[y];
  for (var z in worksheet) {
    /* all keys that do not begin with "!" correspond to cell addresses */
    if(z[0] === '!') continue;
    console.log(worksheet[z].v);
  }
});