# Hot-Restaurant
Take  reservations or put people on a waiting list.  Also make new reservations and go back home from any page.  When server is restarted, the reservations will disappear because data is living only on the server, it is not hard coded.  With this application, the goal is to have the front and the back end talk to each other. 

# Getting Started
![](coffe.jpg)


# Basic Structure
Data and logic live on the Node server.  Routes make the data and logic accessible.  Ajax is used on those routes to push changes on the client front end side.

# Prerequisites
* Set up the server with server.js file.
* $ npm init
* $ npm install body-parser express --save
* This will create a node_modules folder as well as a Json format.
* When building .html files  USE: [hot-restaurant.herokuapp.com](http://hot-restaurant.herokuapp.com/) View Page Source code or you may create your own.  


# Deployment
* Terminal start with node server.js
* Browser start with search for localhost:8080 
    * NOTE: started with [app.listen(3000)](https://expressjs.com/en/starter/hello-world.html) from express documentation but changed to var PORT = process.env.PORT || 8080


# Built With
* [Body-Parser](https://www.npmjs.com/package/body-parser) allows us to receive our information back in [JSON](https://en.wikipedia.org/wiki/JSON#Example) format for easy manipulation.
* [Express](https://www.npmjs.com/package/express) makes routing easy using Node.js by setting var app = express(); so we can easily call it.
    * Features robust routing
    * HTTP helpers
    * Generates applications quickly


# Authors

* Sonia Molina Bradley

# License
This project is licensed under the [MIT](https://github.com/expressjs/body-parser/blob/master/LICENSE) License 

# Acknowledgments




