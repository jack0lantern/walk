// DEPRECATED

var fs = require('fs');
var key = fs.readFileSync('key.txt').toString();

function Node(code, lat, lng, edges) {
	this.code = code;
	this.lat = lat;
	this.lng = lng;
	this.edges = edges;
}

function makeEdge(node1, node2) {
	node1.edges.push(node2);
	node2.edges.push(node1);
}