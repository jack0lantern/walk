var k = 'AIzaSyCPR2rOcZsvGqHM2BorE93K3ARV-SUc7Ec';
var data = 
[
    {
      "Location": "Entrance to Littlefield Inside Honors Quad",
      "Code": "EntLit",
      "Latitude/Longitude": "30.289039, -97.739754",
      "Connections": "CoBlaLit"
    },
    {
      "Location": "Corner of Blanton and Littlefield LPC",
      "Code": "CoBlaLit",
      "Latitude/Longitude": "30.289016, -97.739512",
      "Connections": "EntLit, OutHQ"
    },
    {
      "Location": "Right outside the Honors Quad (but before University Avenue)",
      "Code": "OutHQ",
      "Latitude/Longitude": "30.289017, -97.739249",
      "Connections": "CoBlaLit, NEntMEG"
    },
    {
      "Location": "North Entrance of Mary E. Gearing Hall",
      "Code": "NEntMEG",
      "Latitude/Longitude": "30.288000, -97.739242",
      "Connections": "OutHQ, MEG"
    },
    {
      "Location": "Mary E. Gearing Hall",
      "Code": "MEG",
      "Latitude/Longitude": "30.287779, -97.739203",
      "Connections": "NEntMEG, SEntMEG"
    },
    {
      "Location": "South Entrance of Mary E. Gearing Hall",
      "Code": "SEntMEG",
      "Latitude/Longitude": "30.287436, -97.739238",
      "Connections": "MEG, EntParkPaint"
    },
    {
      "Location": "Entrance to Parking Lot in front of Painter Hall",
      "Code": "EntParkPaint",
      "Latitude/Longitude": "30.287053, -97.739280",
      "Connections": "SEntMET, EntPathGebTow"
    },
    {
      "Location": "Entrance to Path Between Gebauer and Tower",
      "Code": "EntPathGebTow",
      "Latitude/Longitude": "30.286610, -97.738950",
      "Connections": "EntParkPaint, CorGeb"
    },
    {
      "Location": "Corner of Gebauer Building",
      "Code": "CorGeb",
      "Latitude/Longitude": "30.286236, -97.738859",
      "Connections": "EntPathGebTow, EntWCH"
    },
    {
      "Location": "Entrance to Will C. Hogg Bldg",
      "Code": "EntWCH",
      "Latitude/Longitude": "30.286135, -97.738673",
      "Connections": "CorGeb, PathCurve"
    },
    {
      "Location": "Where the pathway curves",
      "Code": "PathCurve",
      "Latitude/Longitude": "30.286075, -97.738748",
      "Connections": "EntWCH, IntStairs"
    },
    {
      "Location": "Intersection with stairs",
      "Code": "IntStairs",
      "Latitude/Longitude": "30.285659, -97.738800",
      "Connections": "PathCurve, EMallCont"
    },
    {
      "Location": "Where E Mall continues",
      "Code": "EMallCont",
      "Latitude/Longitude": "30.285460, -97.738824",
      "Connections": "IntStairs, GarCurve1"
    },
    {
      "Location": "Curve next to Garrison Hall right before stairs",
      "Code": "GarCurve1",
      "Latitude/Longitude": "30.285070, -97.738859",
      "Connections": "EMallCont, GarCurve2"
    },
    {
      "Location": "Curve",
      "Code": "GarCurve2",
      "Latitude/Longitude": "30.285056, -97.738771",
      "Connections": "GarCurve1, GarCurve3"
    },
    {
      "Location": "Curve",
      "Code": "GarCurve3",
      "Latitude/Longitude": "30.285011, -97.738769",
      "Connections": "GarCurve2, GarStairs"
    },
    {
      "Location": "Stairs",
      "Code": "GarStairs",
      "Latitude/Longitude": "30.284996, -97.738688",
      "Connections": "GarCurve3, 22Gar"
    },
    {
      "Location": "22nd in front of garrison hall",
      "Code": "22Gar",
      "Latitude/Longitude": "30.284926, -97.738693",
      "Connections": "GarStairs, TreeBatts"
    },
    {
      "Location": "Under the tree in front of Batts next to dumpsters",
      "Code": "TreeBatts",
      "Latitude/Longitude": "30.284743, -97.738500",
      "Connections": "22Gar, EntMC"
    },
    {
      "Location": "Entrance to McCombs on 3rd floor",
      "Code": "EntMC",
      "Latitude/Longitude": "30.284528, -97.738296",
      "Connections": "TreeBatts, WalkintoMcC"
    }
  ];

function Graph() {
	this.nodes = {};
}

function Node(lat, lng, edges) {
	this.lat = lat;
	this.lng = lng;
    // an edge is an object of a connecting node and its relative distance
	this.edges = edges;
	this.makeEdge = function (node) {
		this.edges.push(node);
		node.edges.push(this);
	}
}

function fillNodes(g) {
    var latlngarr = [];
    for(var i = 0; i < data.length; i++) {
        var latlng = data[i]["Latitude/Longitude"].split(", ");
        latlngarr.push({lat: latlng[0], lng: latlng[1]});
//        alert(latlng);
//        alert(data[i].Location);
        var connects = data[i]["Connections"].split(", ");
        var weighteds = [];
        for(var j = 0; j < connects.length; j++) {
            weighteds.push({code: connects[j], weight: -1});
        }
        g.nodes[data[i].Code] = new Node(latlng[0], latlng[1], weighteds);
//        alert(g.nodes[i].code + " " + i);

    }
    return latlngarr;
}

function weighNodes(g) {
    for(var k in g.nodes) {
        // array of dest/weight pairs (objects)
        var myLat = k.lat, myLng = k.lng;
        k.weight = 1;
    }
    return g;
}

var getData = function(data) {
    alert(data.rows);
};
function PNode (data, priority) {
    this.data = data;
    this.priority = priority;
}
PNode.prototype.toString = function(){return this.priority}

// takes an array of objects with {data, priority}
function PriorityQueue (arr) {
    this.heap = [null];
    if (arr) for (i=0; i< arr.length; i++)
        this.push(arr[i].data, arr[i].priority);
}

PriorityQueue.prototype = {
    push: function(data, priority) {
        var node = new PNode(data, priority);
        this.bubble(this.heap.push(node) -1);      
    },
    
    // removes and returns the data of highest priority
    pop: function() {
        var topVal = this.heap[1].data;
        this.heap[1] = this.heap.pop();
        this.sink(1); return topVal;
    },
    
    // bubbles node i up the binary tree based on
    // priority until heap conditions are restored
    bubble: function(i) {
        while (i > 1) { 
            var parentIndex = i >> 1; // <=> floor(i/2)
            
            // if equal, no bubble (maintains insertion order)
            if (!this.isHigherPriority(i, parentIndex)) break;
            
            this.swap(i, parentIndex);
            i = parentIndex;
    }   },
        
    // does the opposite of the bubble() function
    sink: function(i) {
        while (i*2 < this.heap.length) {
            // if equal, left bubbles (maintains insertion order)
            var leftHigher = !this.isHigherPriority(i*2 +1, i*2);
            var childIndex = leftHigher? i*2 : i*2 +1;
            
            // if equal, sink happens (maintains insertion order)
            if (this.isHigherPriority(i,childIndex)) break;
            
            this.swap(i, childIndex);
            i = childIndex;
    }   },
        
    // swaps the addresses of 2 nodes
    swap: function(i,j) {
        var temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    },
        
    // returns true if node i is higher priority than j
    isHigherPriority: function(i,j) {
        return this.heap[i].priority < this.heap[j].priority;
    }
}

function Path(points, length) {
    this.points = points;
    this.length = length;
}

// Dijkstra's
function getShortestPath(g, start, end) {
    var paths = new PriorityQueue();
    for(var n in g.nodes) {
        n.value = Infinity;
    }
    g.nodes[start].value = 0;
    var current = start;
    for(var neighbor in current.edges) {
        if(neighbor === end)
            break;
        
    }
}


function init() {
    var g = new Graph();
    var latslngs = fillNodes(g);
    weighNodes(g);
//    getShortestPath(g, 2, 3);
//    alert(g.f);
    var bounds = new google.maps.LatLngBounds;
  var markersArray = [];

  var origin1 = {lat: 55.93, lng: -3.118};
  var origin2 = 'Greenwich, England';
  var destinationA = 'Stockholm, Sweden';
  var destinationB = {lat: 50.087, lng: 14.421};

//  var destinationIcon = 'https://chart.googleapis.com/chart?' +
//      'chst=d_map_pin_letter&chld=D|FF0000|000000';
//  var originIcon = 'https://chart.googleapis.com/chart?' +
//      'chst=d_map_pin_letter&chld=O|FFFF00|000000';
//  var map = new google.maps.Map(document.getElementById('map'), {
//    center: {lat: 55.53, lng: 9.4},
//    zoom: 10
//  });
  var geocoder = new google.maps.Geocoder;
    var service = new google.maps.DistanceMatrixService;
  service.getDistanceMatrix({
    origins: latslngs,
    destinations: [destinationA, destinationB],
    travelMode: google.maps.TravelMode.WALKING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
  }, function(response, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      alert('Error was: ' + status);
    } else {
      var originList = response.originAddresses;
      var destinationList = response.destinationAddresses;
      var outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';
      //deleteMarkers(markersArray);

      for (var i = 0; i < originList.length; i++) {
        var results = response.rows[i].elements;
        
        for (var j = 0; j < results.length; j++) {
//          outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
//              ': ' + results[j].distance.text + ' in ' +
//              results[j].duration.text + '<br>';
        }
      }
    }
  });
    alert();
//    var file = 'list.xlsx';
//    XLSX.read(file, {type: 'binary'});
}
    
function returnPath() {
    return [{lat: 30.289039, lng: -97.739754}, 
{lat: 30.289016, lng: -97.739512}, 
{lat: 30.289017, lng: -97.739249}, 
{lat: 30.288000, lng: -97.739242}, 
{lat: 30.287779, lng: -97.739203}, 
{lat: 30.287436, lng: -97.739238}, 
{lat: 30.287053, lng: -97.739280}, 
{lat: 30.286610, lng: -97.738950}, 
{lat: 30.286236, lng: -97.738859}, 
{lat: 30.286135, lng: -97.738673}, 
{lat: 30.286075, lng: -97.738748}, 
{lat: 30.285659, lng: -97.738800}, 
{lat: 30.285460, lng: -97.738824}, 
{lat: 30.285070, lng: -97.738859}, 
{lat: 30.285056, lng: -97.738771}, 
{lat: 30.285011, lng: -97.738769}, 
{lat: 30.284996, lng: -97.738688}, 
{lat: 30.284926, lng: -97.738693}, 
{lat: 30.284743, lng: -97.738500}, 
{lat: 30.284528, lng: -97.738296}];
}


