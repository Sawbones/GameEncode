var mysql = require('mysql');
var conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password: 'admin',
	database : 'game_encode'
});

conn.connect();
module.exports = function()
{
	this.getUser = function(username, password)
	{
		conn.query('SELECT * FROM users WHERE username="' + username + '" AND password=MD5("' + password + '")', handleUser);
		function handleUser(err, rows, fields)
		{
			if(err) throw err;
			
			console.log(rows);
		}
	}

	this.getMap = function(map_name)
	{
		conn.query(
			"SELECT * FROM maps WHERE name='" + map_name + "'", handleMap
		);
		function handleMap(error, rows, fields)
		{
			console.log(rows);
		}
	}
}