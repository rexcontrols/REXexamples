OpenWeatherMap API example
==========================

The source files located in this folder illustrate the use of a HTTP function block
in order to get weather data via OpenWeatherMap API.

Block HTTP is set up to receive data from OpenWeatherMap API. It is possible to get
data with current weather condition all over the world, 5 day / 16 day weather forecast
for specified cities / coordinates and many other weather data. The example shows how to
get current weather data in Pilsen, CZE via JSON request. JSON string is parsed afterwards
using blocks PJROCT (real) and PJSOCT (string).

## Note ##
This example can be easily modified for other data providers such as WeatherUnderground API (http://www.wunderground.com/weather/api)
The Dark Sky Forecast API (https://developer.forecast.io/) or any other API using JSON formatting.

## Timing of the project ##
The algorithm runs each 500 milliseconds (0.5 s). See the EXEC function block,  
tick x ntick0 = 0.1 x 5 = 0.5 s

## Prerequisites ##
- RexCore must be installed and running on the target device.
- Registration (free) at OpenWeatherMap in order to get unique API ID.

## Running the example ##
- The **exec.mdl* file is the project main file.
- Open it with *RexDraw*.
- Specify your unique OpenWeatherMap API ID into CNS_API:ID:scv. It will concatenate together with 
  parameter "url" of "HTTP" block whole GET request: http://api.openweathermap.org/data/2.5/weather?q=Pilsen&units=metric&appid=your_API_ID
- Compile and download it to the target device.
- Change CNB_TRIGGER_GET to ON and ispect outputs of PJROCT and PJSOCT blocks to see received
and parsed data.

## Documentation ##
- **Press F1 for help** on the selected function block in the *RexDraw* program.
- [OpenWeatherMap API documentation](http://openweathermap.org/api)
- [Complete documentation of the REX Control System](http://www.rexcontrols.com/documentation-and-support)

## Additional information ##
- Visit the [REX Controls company webpage](http://www.rexcontrols.com) 
for more information about the example projects and developing advanced 
automation and control solutions using the REX Control System.