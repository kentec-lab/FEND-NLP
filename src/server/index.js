const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const aylien = require('aylien_textapi');

// Configure environment variable for API keys
dotenv.config();

// Initiate the Aylien SDK 
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require('body-parser');

// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
const port = process.env.port || 8081;
const server = app.listen(port, () => console.log(`server is running on local host: ${port}`));

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// GET Route - Initial Display
app.get('/', function (req, res) {
    // production mode: 
    res.sendFile('dist/index.html')

    // dev mode: 
    // res.sendFile('../client/views/index.html');
})

// GET Route - show what is in the data
app.get('/getting', function (req, res) {
    res.send(projectData);
})

// POST Route - add new data to the object
app.post('/posting', function (req, res) {
    let textEvaluation = req.body.formText;
    textapi.sentiment({
        text: textEvaluation,
        mode: 'document'
    }, function (error, response) {
        console.log(error);
        if (error === null) {
            projectData = response;
            res.send({});
        }
    })
})
