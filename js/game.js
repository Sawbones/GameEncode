function Game(canvasSelector)
{
	var canvas = document.getElementById('game');
	var c = canvas.getContext('2d');
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	
	c.fillStyle = "#90CA77";
	c.fillRect(0, 0, canvas.width, canvas.height);
	
	var groundTexture = new Image();
	groundTexture.src = "../images/tilea2.png";
	
	var floraTexture = new Image();
	floraTexture.src = "../images/tile_custom01.png";
	
	var spriteSize = 32;

	var grass = generateFlora(600);
	var patch = generateFlora(600);

	var forest = new Forest({});
	forest.generate();

	trees = forest.getTrees();


	console.log(trees);
	
	this.update = function(delta)
	{
		
	}
	
	this.render = function(delta)
	{
		
		for(var y = 0; y < canvas.height; y += spriteSize)
		{
			for(var x = 0; x < canvas.width; x += spriteSize)
			{
				c.drawImage(groundTexture, 0, 0, spriteSize, spriteSize, x, y, spriteSize, spriteSize);
			}
		}
		
		for(var i = 0; i < trees.length; i += 1)
		{
			c.drawImage(floraTexture,
				5 * 32, 
				10 * 32,
				spriteSize,
				spriteSize*2,
				trees[i].x,
				trees[i].y,
				spriteSize,
				spriteSize*2);
		}

		for(var i = 0; i < grass.length; i+=1)
		{
			c.drawImage(floraTexture, 0, 10 * 32, spriteSize, spriteSize, grass[i].x, grass[i].y, spriteSize, spriteSize);
			c.drawImage(floraTexture, 2 * 32, 10 * 32, spriteSize, spriteSize, patch[i].x, patch[i].y, spriteSize, spriteSize);
		}
	}

	function generateFlora(amount)
	{
		var flora = new Array();

		for(var i = 0; i < amount; i += 1)
		{
			var x = (Math.random() * canvas.width) + 1;
			var y = (Math.random() * canvas.height) + 1;
			flora.push({ x : x, y : y });
		}

		return flora;
	}
}