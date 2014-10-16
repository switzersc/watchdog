watchdog
========

Watchdog is a node app written with [zettajs](http://www.zettajs.org/) for an Arduino LED. You feed Bruno the dog different foods (via text input in the browser)
and the LED turns on or off depending on how Bruno likes the food. Future plans are to use a speaker instead of an LED,
and to trigger the dog via a bluetooth LE sensor instead of / in addition to the web interface.

## Setup

Clone the repo. Run `npm install`, then run the server with `node server.js`. You can then go to http://browser.zettajs.io/ 
and click on the http://hello-zetta.herokuapp.com/ server to see your server and interact with the dog. 

You can change the web server you link to in the server.js file with the `.link()` function.

PS. You will need an Arduino LED connected to your computer at the moment, or you can mock one out.

## Contributions

Please fork and submit a pull request. Bruno likes new friends :)
