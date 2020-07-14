vps = vps || {};
vps.worldobjects = vps.worldobjects || {};

/**
 * A Python ship (from Elite)
 */
vps.worldobjects.Python = function(name, hue, reflectivity){
	
	// Call parent constructor
	vps.worldobjects.Python.baseConstructor.call(this, name);	
	
	this.addVertexByCoords(0,		0,		160);		// 0
	this.addVertexByCoords(-80,	0,		-80);		// 1
	this.addVertexByCoords(0,		50,		-30);		// 2
	this.addVertexByCoords(80,	0,		-80);		// 3
	
	this.addVertexByCoords(0,		50,		-80);		// 4
	this.addVertexByCoords(0,		30,		-160);		// 5
	this.addVertexByCoords(50,	0,		-160);		// 6
	this.addVertexByCoords(-50,	0,		-160);		// 7
	
	this.addVertexByCoords(0,		-50,	-30);		// 8
	this.addVertexByCoords(0,		-50,	-80);		// 9
	this.addVertexByCoords(0,		-30,	-160);		// 10
	this.addVertexByCoords(0,		-10,	-162);		// 11
	
	this.addVertexByCoords(10,	0,		-162);		// 12
	this.addVertexByCoords(0,		10,		-162);		// 13
	this.addVertexByCoords(-10,	0,		-162);		// 14

	this.addPolygon3(0,1,2,hue,reflectivity);
	this.addPolygon3(0,2,3,hue,reflectivity);
	this.addPolygon3(1,4,2,hue,reflectivity);
	this.addPolygon3(2,4,3,hue,reflectivity);
	
	this.addPolygon3(5,4,1,hue,reflectivity);
	this.addPolygon3(3,4,5,hue,reflectivity);
	this.addPolygon3(5,6,3,hue,reflectivity);
	this.addPolygon3(1,7,5,hue,reflectivity);
	
	this.addPolygon3(0,3,8,hue,reflectivity);
	this.addPolygon3(0,8,1,hue,reflectivity);
	this.addPolygon3(3,9,8,hue,reflectivity);
	this.addPolygon3(8,9,1,hue,reflectivity);
	
	this.addPolygon3(10,9,3,hue,reflectivity);
	this.addPolygon3(1,9,10,hue,reflectivity);
	this.addPolygon3(10,7,1,hue,reflectivity);
	this.addPolygon3(3,6,10,hue,reflectivity);
	
	//this.addPolygon3(5,7,10,-hue,reflectivity);
	//this.addPolygon3(5,10,6,-hue,reflectivity);
	this.addPolygon4(5,7,10,6,-hue,reflectivity);
	
	//this.addPolygon3(11,12,13,-hue,reflectivity);
	//this.addPolygon3(13,14,11,-hue,reflectivity);
	this.addPolygon4(13,14,11,12,-hue,reflectivity);

};


// Extend Polygon
vps.Utils.extend(vps.worldobjects.Python, vps.WorldObject);