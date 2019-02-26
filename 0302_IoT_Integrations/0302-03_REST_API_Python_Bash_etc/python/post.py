import requests
import json

targetIPAddress = '192.168.1.100:8008'
taskName = 'rest_api_task'

def RexInitSession(loginREX, passwordREX):
    s = requests.Session()
    s.auth = (loginREX, passwordREX)
    s.headers.update({"Content-Type":"application/json","Accept":"application/json"})
    
    return s
        
def RexPost(session,connectionString, value):
    # Build request
    url = 'http://' + targetIPAddress + '/api/tasks/' + taskName + '/' +connectionString
    data = json.dumps({"v":value})
    # Send request
    r = session.post(url,data)
    # Process response
    if r.status_code == 200:
        ret = True
        print(connectionString + " = " + str(value) + " successfully written.")
    else:
        ret = False
        print(connectionString +" failed to write.")
    return ret

def RexGet(session, connectionString):
    # Build request
    url = 'http://' + targetIPAddress + '/api/tasks/' + taskName + '/' +connectionString
    # Send request
    r = session.get(url)
    data = r.json()['v']
    # Process response
    if r.status_code == 200:
        ret = data
        print(connectionString + " = " + str(data))
    else:
        ret = False
        print(connectionString +" failed to read.")
    return ret

# Initialize REST API session (fill in REXYGEN credentials)
s = RexInitSession('admin','mypassword')

# Read data from REXYGEN using HTTP GET request
bool = RexGet(s,'CNB_IN:Y')
long = RexGet(s,'CNI_IN:iy')
double = RexGet(s,'CNR_IN:y')
string = RexGet(s,'CNS_IN:sy')

# Write data to REXYGEN using HTTP POST request
RexPost(s,'CNB_IN:YCN', 1)
RexPost(s,'CNI_IN:icn', 1234)
RexPost(s,'CNR_IN:ycn', 17.89)
RexPost(s,'CNS_IN:scv', 'Hello from Python')