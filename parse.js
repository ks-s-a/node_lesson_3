var request = require('request');
var cheerio = require('cheerio');

// request('http://www.rbc.ru/', function (error, response, html) {
//   if (!error && response.statusCode === 200) {
//     var $ = cheerio.load(html);
    
//     $('.indicators_vert__ticker__td').each(function(i, element) {
//       console.log($(element).text().trim());
//     });
    
//   } else {
//     console.log('error is: ', error);
//     console.log('statusCode is: ', statusCode);
//   }
// });

request('https://www.gismeteo.ru/city/daily/4720/', function (error, response, html) {
  if (!error && response.statusCode === 200) {
    var $ = cheerio.load(html);
    
    $('#tbwdaily1 > tr').eq(2).find('td.temp > span').eq(0).each(function(i, element) {
      console.log($(element).text().trim());
    });

  } else {
    console.log('error is: ', error);
    console.log('statusCode is: ', statusCode);
  }
});