var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var fs = require('fs');

var SEARCH_WORD = "javascript";

request("https://meerkad.com/remote-developer-jobs", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  $('div.large_job_result').each(function( index ) {
    var title = $(this).find('div.font-weight-bold').text().trim();
    console.log(title);
    var isWordFound = searchForWord(title, SEARCH_WORD);
    if(isWordFound) {
      var link = $(this).find('div.text-center > a').attr('href');
      fs.appendFileSync('joblinks.txt', title + " - " + link + '\n');
    } else {
      console.log("no results found");
    }
  });
});

function searchForWord(title, word) {
  return(title.toLowerCase().indexOf(word.toLowerCase()) !== -1) 
}

