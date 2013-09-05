function Forest(options)
{
	var width 						= options.width 			|| 100;
	var height 						= options.height 			|| 100;
	var spacings 					= options.spacings 			|| 5;
	var spacingsRadius 				= options.spacingsRadius 	|| 20;
	var spacingStrength 			= options.spacingStrength	|| .33;
	
	var thickness					= options.thickness			|| .75;
	
	var treeWidth					= options.treeWidth			|| 5;
	var treeHeight					= options.treeHeight		|| 5;
	
	var treeSpacingWidth			= options.treeSpacingWidth 	|| 30;
	var treeSpacingHeight 			= options.treeSpacingHeight || 100;
	var treeSpacingWidthVariation	= options.treeSpacingWidthVariation 	|| 20;
	var treeSpacingHeightVariation	= options.treeSpacingHeightVariation 	|| 20;
	
	var forestCenter				= options.forestCenter || { x : width/2, y : height/2 };
	
	var spacingsCoords 	= [];
	var trees 			= [];
	
	for(var s = 0; s < spacings; s += 1)
	{
		var x = (Math.random() * width) + 1;
		var y = (Math.random() * height) + 1;
		
		spacingsCoords.push({ x : x, y : y});
	}
	
	this.generate = function()
	{
		for(var y = 0; y < height; y += (Math.random()*treeSpacingHeightVariation)+treeSpacingHeight)
		{
			var row = [];
			for(var x = 0; x < width; x += (Math.random()*treeSpacingWidthVariation)+treeSpacingWidth)
			{
				var chance = Math.random();
				var xDistance = Math.abs(x - forestCenter.x);
				var yDistance = Math.abs(y - forestCenter.y);
				
				var distance = (xDistance + yDistance) / 300;
				
				chance += distance;
				if(chance < thickness)
				{
					row.push({ x : x, y : y });
				}
			}
			trees.push(row);
		}
	}
	
	this.getTrees = function()
	{
		return trees;
	}
}