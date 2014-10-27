// Find pizza in Mountain View using Yelp

var Horseman = require("node-horseman");

var horseman = new Horseman();

var data = horseman
	.open('http://lite.yelp.com/search?find_desc=pizza&find_loc=94040&find_submit=Search')
	.text('address');

console.log( data );

horseman.close();