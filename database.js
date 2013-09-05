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
}