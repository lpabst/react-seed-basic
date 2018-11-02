import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as massive from 'massive';

const config = require('./config.js');
const app = module.exports = express();

app.use(bodyParser.json());

// massive(config.connection)
// .then( db => {
//   app.set('db', db);
// })

app.use(express.static(__dirname + './../build'))

const userController = require("./userController.js");

//////////Endpoints for the front end




app.listen(config.port, console.log("you are now connected on " + config.port));
