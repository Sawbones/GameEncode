var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var database = require('./database');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	var html = fs.readFileSync(__dirname + '/index.html');
	res.writeHead(200);
	res.end(html);
});

io.sockets.on('connection', connection);

function connection(socket)
{
	//Wait for username and password to be submitted to server
	socket.on('credentials', credentials);
}

function credentials(login)
{
	var username = login.username;
	var password = login.password;
	
	//database.getUser(username, password);
}


server.listen(8887);

database.getMap('intro');