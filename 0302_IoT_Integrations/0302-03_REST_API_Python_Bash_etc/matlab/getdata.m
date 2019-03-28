clc; 
clear all;

serviceUrl = 'http://192.168.1.100:8008';
options = weboptions;
options.Username = 'admin';
options.Password = 'mypasswd';
options.ContentType = 'json';
options.MediaType = 'application/json';
options.RequestMethod = 'Get';

% paths to the data points
path_double = "/api/tasks/rest_api_task/CNR_IN:y";
path_long =   "/api/tasks/rest_api_task/CNI_IN:iy";
path_bool =   "/api/tasks/rest_api_task/CNB_IN:Y";
path_string = "/api/tasks/rest_api_task/CNS_IN:sy";
path_sum =    "/api/tasks/rest_api_task/ADD:y";
path_array =  "/api/tasks/rest_api_task/CNA_IN:acn";

% reading double value
response = webread(strcat(serviceUrl,path_double), options);
data_double = response.v

% reading integer value
response = webread(strcat(serviceUrl,path_long), options);
data_long = response.v

% reading Boolean value
response = webread(strcat(serviceUrl,path_bool), options);
data_bool = response.v

% reading string
response = webread(strcat(serviceUrl,path_string), options);
data_string = convertCharsToStrings(response.v)

% reading sum
response = webread(strcat(serviceUrl,path_sum), options);
data_sum = response.v

% reading array
response = webread(strcat(serviceUrl,path_array), options);
data_array = response.v.Data

