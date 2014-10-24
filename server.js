var express = require('express');
var bodyParser = require('body-parser');

var db = require('./serverAssets/database');

var app = express();

app.use(bodyParser.json());