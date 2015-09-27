// DEPRECATED

var fs = require('fs');
var key = fs.readFileSync('key.txt').toString();

function Node(code, lat, lng, edges) {
	this.code = code;
	this.lat = lat;
	this.lng = lng;
	this.edges = edges;
	this.makeEdge = function (node) {
		this.edges.push(node);
		node.edges.push(this);
	}
}



function Graph(node) {
	this.nodes = [node];
}