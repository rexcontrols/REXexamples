// Developed and tested with following boards/library versions:
//    esp8266 boards    2.4.2
//    ArduinoJson       5.13.4
//    ESP8266HTTPClient 1.1.0
//    ESP8266WiFi       1.0.0
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#define ARDUINOJSON_ENABLE_ARDUINO_STRING 1
#include <ArduinoJson.h>

// Fill in REXYGEN credentials 
char* rexygenLogin = "admin";
char* rexygenPassword = "mypassword";

// Fill in WiFi credentials
const char* ssid = "wifissid";
const char* password = "wifipassword";

// Specify Target IP address and task name
const char * targetIPaddress = "192.168.1.100:8008";
const char * taskName = "rest_api_task";

char url[200];

short RexygenPost(char* connectionString, double value){
  char urlPost[200];
  int httpCode;
  HTTPClient http;

  //Build request
  strcpy(urlPost, url);
  strcat(urlPost, connectionString);

  Serial.println(urlPost);

  String valueString = String(value);
  http.begin(urlPost);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Accept", "application/json");
  http.setAuthorization(rexygenLogin,rexygenPassword);
  httpCode = http.POST("{\"v\":"+valueString+"}"); //returns http response code
  http.end();
  Serial.println(httpCode);

  return httpCode;
}

short RexygenPostString(char* connectionString, String value){
  char urlPost[200];
  int httpCode;
  HTTPClient http;

  //Build request
  strcpy(urlPost, url);
  strcat(urlPost, connectionString);

  Serial.println(urlPost);
  
  http.begin(urlPost);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Accept", "application/json");
  http.setAuthorization(rexygenLogin,rexygenPassword);
  httpCode = http.POST("{\"v\":\""+value+"\" }"); //returns http response code
  http.end();
  Serial.println(httpCode);

  return httpCode;
}


float RexygenGet(char* connectionString){
  char urlGet[200];
  int httpCode;
  float v;
  HTTPClient http;

  //Build request
  strcpy(urlGet, url);
  strcat(urlGet, connectionString);

  Serial.println(urlGet);

  http.begin(urlGet);
  //http.addHeader("Content-Type", "application/json");
  http.addHeader("Accept", "application/json");
  http.setAuthorization(rexygenLogin,rexygenPassword);
  httpCode = http.GET(); // Returns http response code

  if (httpCode == 200) { // Check the returning code
    const size_t bufferSize = JSON_OBJECT_SIZE(1) + 30;
    DynamicJsonBuffer jsonBuffer(bufferSize);

    JsonObject& root = jsonBuffer.parseObject(http.getString());
    v = root["v"];
  }
  else{
    v = -1;
  }
  
  http.end();
  Serial.println(httpCode);
  //Serial.println(v);
  return v;
}

String RexygenGetString(char* connectionString){
  char urlGet[200];
  String v;
  int httpCode;
  HTTPClient http;

  //Build request
  strcpy(urlGet, url);
  strcat(urlGet, connectionString);

  Serial.println(urlGet);

  http.begin(urlGet);
  //http.addHeader("Content-Type", "application/json");
  http.addHeader("Accept", "application/json");
  http.setAuthorization(rexygenLogin,rexygenPassword);
  httpCode = http.GET(); // Returns http response code

  if (httpCode == 200) { // Check the returning code
    const size_t bufferSize = JSON_OBJECT_SIZE(1) + 30;
    DynamicJsonBuffer jsonBuffer(bufferSize);
    JsonObject& root = jsonBuffer.parseObject(http.getString());
    v = root["v"].as<String>();
  }
  else{
    v = "null";
  }
  
  http.end();
  Serial.println(httpCode);
  //Serial.println(v);
  return v;
}

void setup()
{
  // Creating url which is common for http requests
  strcpy(url, "http://");
  strcat(url, targetIPaddress);
  strcat(url, "/api/tasks/");
  strcat(url, taskName);
  strcat(url, "/");
  
  WiFi.mode(WIFI_STA);
  // Start serial
  Serial.begin(115200);

  short tries = 300;
  // Connect to the WiFi
  Serial.print("Connecting to "); Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (--tries && WiFi.status() != WL_CONNECTED)
  {
    delay(10);
    Serial.print(".");
  }
  if (WiFi.status() != WL_CONNECTED)
  {
    Serial.println("WiFi not connected! Restarting...");
    ESP.restart();
  }
  else
  {
    Serial.println("WiFi connected");
  }
}


void loop() {
  short ret; //return http request response code - can be processed

  // Read data from REXYGEN using HTTP GET request
  boolean b = RexygenGet("CNB_IN:Y");
  int i = RexygenGet("CNI_IN:iy");
  float r = RexygenGet("CNR_IN:y");
  String s = RexygenGetString("CNS_IN:sy");

  Serial.println(b);
  Serial.println(i);
  Serial.println(r);
  Serial.println(s);
    
  // Write data to REXYGEN using HTTP POST request
  ret = RexygenPost("CNB_IN:YCN", 1);    
  ret = RexygenPost("CNR_IN:ycn", 17.89);
  ret = RexygenPost("CNI_IN:icn", 1234);
  ret = RexygenPostString("CNS_IN:scv", "Hello from ESP8266");

  delay(10000);
}

