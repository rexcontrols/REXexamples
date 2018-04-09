#!/bin/bash

# Values to be written
value_double=17.89
value_long=1234
value_bool=1
value_string="External string"

# URLs of the data points
url_double="http://192.168.1.100:8008/api/tasks/rest_api_task/CNR_IN:ycn"
url_long="http://192.168.1.100:8008/api/tasks/rest_api_task/CNI_IN:icn"
url_bool="http://192.168.1.100:8008/api/tasks/rest_api_task/CNB_IN:YCN"
url_string="http://192.168.1.100:8008/api/tasks/rest_api_task/CNS_IN:scv"

# Credentials
user="admin"
password="mypasswd"

echo -e "\nWriting data type double ... "
curl -d "{\"v\":$value_double}" -u "$user:$password" -H "Content-Type: application/json" -X POST $url_double

echo -e "\nWriting data type long ... "
curl -d "{\"v\":$value_long}" -u "$user:$password" -H "Content-Type: application/json" -X POST $url_long

echo -e "\nWriting data type Boolean ... "
curl -d "{\"v\":$value_bool}" -u "$user:$password" -H "Content-Type: application/json" -X POST $url_bool

echo -e "\nWriting data type string ... "
curl -d "{\"v\":\"$value_string\"}" -u "$user:$password" -H "Content-Type: application/json" -X POST $url_string

echo