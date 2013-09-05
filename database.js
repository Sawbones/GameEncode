var mysql = require('mysql');
var conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	database : 'game_encode'
});

conn.connect();
module.exports.getUser = function(username, password)
{
	conn.query('SELECT * FROM users WHERE username="' + username + '" AND password=MD5("' + password + '")', handleUser);
	function handleUser(err, rows, fields)
	{
		if(err) throw err;
		
		console.log(rows);
	}
}

module.exports.getMap = function(map_name)
{
	conn.query(
		"SELECT * FROM map WHERE name='" + map_name + "'", handleMap
	);
	function handleMap(error, rows, fields)
	{
		for(var i = 0; i < rows.length; i += 1)
		{
			var map = rows[i];
			console.log(map.name);
		}
	}
}