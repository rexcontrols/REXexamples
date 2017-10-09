Node-RED + OpenWeatherMap API example
=====================================

The source files located in this folder illustrate how to communicate with REX REST API using popular tool Node-red
in order to process weather data acquired via OpenWeatherMap API.

In the OpenWeatherMapAPI_flow.txt file is a flow of nodes which represents configuration of the Node-RED framework.
Node named as *Get weather info* is set up to receive data from OpenWeatherMap API. It is possible to get
data with current weather condition all over the world, 5 day / 16 day weather forecast
for specified cities / coordinates and many other weather data. The example shows how to
get current weather data in Pilsen, CZE via JSON request.

JSON string from the response is then parsed and multiple requests are created in order to post data to the REX REST API.

## Notes ##
This example can be easily modified for other data providers such as WeatherUnderground API (http://www.wunderground.com/weather/api)
The Dark Sky Forecast API (https://developer.forecast.io/) or any other API using JSON formatting.

Nodes that communicate with the REST API are required to use basic authentification that can be set in the properties of the block.

## Timing of the project ##
The algorithm runs each 5 seconds. Edit the *Clock* node in the flow for different timing options.

## Prerequisites ##
- Node.js and Node-RED must be installed and running on the target (e.g.:Debian Jessie - *apt-get install nodered* will install all
  required packages).
- RexCore must be installed and running on the target device.
- Registration (free) at OpenWeatherMap in order to get unique API ID.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Compile and download it to the target device.
- Start node-red on the target and use web browser to navigate to the address of the node-red's webserver. (default address is
  http://127.0.0.1:1880/)
- Import flow from OpenWeatherMapAPI_flow.txt. You can use either import from clipboard or you can copy the file to the */lib/flows*
  in your installation and then import the flow as a Library.
- Open the *Get weather info* node and specify your unique OpenWeatherMap API ID in parameter URL:
http://api.openweathermap.org/data/2.5/weather?q=Pilsen&units=metric&appid=your_API_ID
- Open nodes with POST requests and *Get CNDR heating curve* node with GET request from REX and specify target URL
  with corresponding credentials.
- Deploy flow. If everything is done correctly you should see data about the weather stored in REX execution and as a result of GET
  request you should see adequate supply water temperature printed in the debug console of Node-RED.

## Documentation ##
- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [Node.js documentation](https://nodejs.org/en/docs/)
- [Node-RED documentation](http://nodered.org/docs/)
- [OpenWeatherMap API documentation](http://openweathermap.org/api)
- [RexDraw User Guide](https://www.rexcontrols.com/media/2.50.5/doc/ENGLISH/MANUALS/RexDraw/RexDraw_ENG.html)
- [Complete documentation of REX](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using REX.