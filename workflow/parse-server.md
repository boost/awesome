# Boost-Parse-Server
 Up and running with parse server

# Getting Started
[Parse Server ] (https://github.com/ParsePlatform/parse-server-example)

[Parse Server Dashboard] (https://github.com/ParsePlatform/parse-dashboard)

[Parse Resources] (https://parseplatform.github.io/)

1. clone parse Server
``` git@github.com:ParsePlatform/parse-server-example.git ```

2. move to dir &&  ``` npm install ```

3. npm start

4. open parse-server repo and check package.json

5. open index.js and change the `api` `variable` and restart the app

6. Parse dashboard
  ```
  npm install -g parse-dashboard

  parse-dashboard --appId yourAppId --masterKey yourMasterKey --serverURL "https://example.com/parse" --appName optionalName

  ```

## creating in one instance
1. ``` npm install  parse-dashboard --save-dev ```

```
var ParseDashboard = require('parse-dashboard');
app.use('/parse-dashboard', new ParseDashboard({
    apps: [
        {
            serverURL: 'http://localhost:3000/1',
            appId: 'myAppId',
            masterKey: 'myAppMasterKey',
            appName: 'BOOSTSERVER'
        }
    ]
}));

```

# DB Schema & Objects
  ```
  Parse.Object.extend("Team")
  ```

  Parse Object contain Key and Value pare

  ```
  score: 3000, playerName: "Boost Awesome", devMode: true
  ```

# Queries
```
Parse.Query("Team")
```
1. get / find

# Users

```
Parse.Users subclass of Parse.Object
```


# Security  && Permission
  1. Secutiry Keys
  ```
    APPID / MASTERKEY
  ```

  2. Client Class Creation
  ```
    allowClientClassCreation: process.env.CLIENT_CLASS_CREATION || false

    ```
  3. Class Level Permissions
     This is in the dashboard. Security

  4. Access Level Permissions  Object /Instance
  ```

  |--------|           |-------|           | ------ USER 1 --- USER 2 --- USER 3 -------- READ
  | Object | ---->>----|  ACL  | ---->>----|  
  |--------|           |-------|           | ------ USER 4 --- USER 5 --- USER 6 -------- READ && WRITE

  ```

# Files
 Parse file { name, data, type }

 1. name <string>

 2. data <Array> of byte value base64-encoded String

 3. type <string>
 what kind of file Content-Type


# Live Queries


# Cloud Code


# Geolocation
