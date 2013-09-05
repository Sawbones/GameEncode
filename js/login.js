function Login(canvasSelect)
{
	var canvas = document.getElementById(canvasSelect);
	var c = canvas.getContext('2d');
	
	var width = 400, height = 400;
	var x = canvas.width / 2 - width / 2;
	var y = canvas.height / 2 - height / 2;
	
	var $username = $('<input type="text" id="username" class="gui" />');
	var $password = $('<input type="text" id="password" class = "gui" />');
	
	
	var usernameWidth = 300;
	var passwordWidth = 300;
	var textBoxHeight = 35;
	
	$username.css('width', usernameWidth);
	$username.css('top', y + 50);
	$username.css('left', canvas.width/2 - usernameWidth / 2);
	$username.css('height', textBoxHeight);
	
	$password.css('width', passwordWidth);
	$password.css('top', y + 150);
	$password.css('left', canvas.width / 2 - passwordWidth / 2);
	$password.css('height', textBoxHeight);
	
	
	var body = $("body");
	
	body.append( $username );
	body.append( $password );
	
	c.fillStyle = "#FFF";

	this.update = function(delta)
	{
	
	}
	
	this.render = function(delta)
	{
		c.fillRect(x, y, width, height);
	}
}