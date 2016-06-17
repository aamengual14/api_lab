var prompt = require('prompt');
var open = require('open');
var request = require('request');



// Welcome the user to the Fandango Movie Search App
console.log("\nWelcome to our movie app! Get ready to search for all the best movies in your city!\n");

//Prompt the user for the postal code

prompt.start();

prompt.get(['postalCode'], function (err, result) {
    //
    // Log the results.
    //
    console.log('You picked:' + result.postalCode + '!');

    // Make a request to search endpoint to find movies in the user postal code


    request('http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-06-17&zip=' + result.postalCode + '&api_key=rkw63jxhsvecsjsj8pxphsw4', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var bodyObject = JSON.parse(body);
          var counter = 1;
          for (i = 0; i < bodyObject.length; i++) {
            var movieObject = bodyObject[i]['title'];
            console.log(counter + ". " + movieObject);
            counter ++;
          }
        console.log("\nPlease pick the number of which movie you want.\n")
        prompt.get(['movieName'], function (err, result) {
          console.log('\nYou picked: ' + result.movieName + '!');
          var movieUrl = bodyObject[result.movieName -1]['officialUrl'];
          //console.log("\n Would you like to open the official site or check out some showtimes?");

          open(movieUrl);

          var ticketTimes = bodyObject[result.movieName -1]['showtimes'][0]['ticketURI'];
          open(ticketTimes);

        })
      }
    })
  });





// var ticketTimes = bodyObject[result.movieName -1]['showtimes'][0]['ticketURI'];
          // open(ticketTimes);




