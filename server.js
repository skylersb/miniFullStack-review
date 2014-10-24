var express = require('express');
var bodyParser = require('body-parser');
var database = require('./serverAssets/database');
var port = 3000;
var cors = require('cors');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/friends', function(req, res){
	res.send(database.getFriends());
});

app.post('/friends/new' , function(req, res){
	res.send(database.addFriend(req.body));
})




app.listen(port, function(){
	console.log('Listening on port ' + port);
});