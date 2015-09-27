// DEPRECATED
var XLSX = require('xlsx');

exports.build = function(sheet) {
  var workbook = XLSX.readFile(sheet);
  var sheet_name_list = workbook.SheetNames;
  sheet_name_list.forEach(function(y) { /* iterate through sheets */
    var worksheet = workbook.Sheets[y];
    for (var z in worksheet) {
      /* all keys that do not begin with "!" correspond to cell addresses */
      if(z[0] === '!') continue;
      console.log(worksheet[z].v);
    }
  });
};

