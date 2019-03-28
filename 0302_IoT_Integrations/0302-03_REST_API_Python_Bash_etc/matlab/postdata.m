clc; 
clear all;

serviceUrl = 'http://192.168.1.100:8008';
options = weboptions;
options.Username = 'admin';
options.Password = 'mypasswd';
options.ContentType = 'json';
options.MediaType = 'application/json';
options.RequestMethod = 'Post';

% paths to the data points
path_double="/api/tasks/rest_api_task/CNR_IN:ycn";
path_long="/api/tasks/rest_api_task/CNI_IN:icn";
path_bool="/api/tasks/rest_api_task/CNB_IN:YCN";
path_string="/api/tasks/rest_api_task/CNS_IN:scv";
path_sum="/api/tasks/rest_api_task/ADD:y";

% writing double value
data = struct('v',55.5);
response = webwrite(strcat(serviceUrl,path_double), data, options);
response.error.message

% writing long value
data = struct('v',33);
response = webwrite(strcat(serviceUrl,path_long), data, options);
response.error.message

% writing Boolean value
data = struct('v',1);
response = webwrite(strcat(serviceUrl,path_bool), data, options);
response.error.message

% writing string
data = struct('v',"Hello from Matlab");
response = webwrite(strcat(serviceUrl,path_string), data, options);
response.error.message
