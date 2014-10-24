var express = require('express');
var bodyParser = require('body-parser');
// var database = require('./serverAssets/database');
var port = 3000;
var cors = require('cors');
var app = express();

//MONGO SETUP
var mongoose = require('mongoose');
var Friend = require('./serverAssets/friend/friendController')

var databaseReference = 'mongodb://localhost/fullStack';

var connection = mongoose.connection;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/friends', Friend.getFriends());


app.post('/friends/new' , Friend.addFriend());


mongoose.connect(databaseReference);
connection.once('open', function (){
	
app.listen(port, function(){
	console.log('Everything is working and we are connected to our mongoDb on port: ' + port);
	})
});

