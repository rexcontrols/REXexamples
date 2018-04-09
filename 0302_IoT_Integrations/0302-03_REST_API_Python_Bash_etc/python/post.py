import json
import urllib2
import base64

# Values to be written
value_double = 17.89
value_long = 1234
value_bool = 1
value_string = "External string"

# URLs of the data points
url_double = 'http://192.168.1.100:8008/api/tasks/rest_api_task/CNR_IN:ycn'
url_long = 'http://192.168.1.100:8008/api/tasks/rest_api_task/CNI_IN:icn'
url_bool = 'http://192.168.1.100:8008/api/tasks/rest_api_task/CNB_IN:YCN'
url_string = 'http://192.168.1.100:8008/api/tasks/rest_api_task/CNS_IN:scv'

# Credentials
user='admin'
password = 'mypasswd'

# Create HTTP POST request for data type double
data = json.dumps({"v":value_double})
req = urllib2.Request(url_double, data)
req.add_header("Accept", "*/*")
req.add_header("Content-Type", "application/json")   
req.add_header("Authorization", "Basic %s" % base64.b64encode('%s:%s' % (user, password)))   
# Send request
f = urllib2.urlopen(req)
# Process response
response = f.read()
if f.code == 200:
    print('Double value written OK')
f.close()

# Create HTTP POST request for data type long
data = json.dumps({"v":value_long})
req = urllib2.Request(url_long, data)
req.add_header("Accept", "*/*")
req.add_header("Content-Type", "application/json")   
req.add_header("Authorization", "Basic %s" % base64.b64encode('%s:%s' % (user, password)))   
# Send request
f = urllib2.urlopen(req)
# Process response
response = f.read()
if f.code == 200:
    print('Long value written OK')
f.close()

# Create HTTP POST request for data type Boolean
data = json.dumps({"v":value_bool})
req = urllib2.Request(url_bool, data)
req.add_header("Accept", "*/*")
req.add_header("Content-Type", "application/json")   
req.add_header("Authorization", "Basic %s" % base64.b64encode('%s:%s' % (user, password)))   
# Send request
f = urllib2.urlopen(req)
# Process response
response = f.read()
if f.code == 200:
    print('Boolean value written OK')
f.close()

# Create HTTP POST request for data type string
data = json.dumps({"v":value_string})
req = urllib2.Request(url_string, data)
req.add_header("Accept", "*/*")
req.add_header("Content-Type", "application/json")   
req.add_header("Authorization", "Basic %s" % base64.b64encode('%s:%s' % (user, password)))   
# Send request
f = urllib2.urlopen(req)
# Process response
response = f.read()
if f.code == 200:
    print('String value written OK')
f.close()

