var prompt = require('prompt');
var open = require('open');
var request = require('request');



// Welcome the user to the Fandango Movie Search App
console.log("Welcome to Fredo's Movie App! Get ready to search for all the best movies in your city!");

//Prompt the user for the postal code

prompt.start();

prompt.get(['postalCode'], function (err, result) {
    //
    // Log the results.
    //
    console.log('You picked:' + result.postalCode + '!');

    // Make a request to search endpoint to find movies in the user postal code


    request('http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-06-17&zip=' + result.postalCode + '&api_key=d42apgb63ggdmvm3cxr3vtsf', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var bodyObject = JSON.parse(body);
        console.log(bodyObject);
        //open(bodyObject);
      }
    })
  });


//var answer = prompt(What movie do you want to seee today?)


// console(Ok, great!

//prompt(Enter your postal code)

//return URL of all movies


