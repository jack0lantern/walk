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
    for(var i = 0; i < data.length; i++) {
        var latlng = data[i]["Latitude/Longitude"].split(", ");
//        alert(latlng);
//        alert(data[i].Location);
        var connects = data[i]["Connections"].split(", ");
        var weighteds = [];
        for(var j = 0; j < connects.length; j++) {
            weighteds.push({edge: weighteds[j], weight: -1});
        }
        g.nodes[data[i].Code] = new Node(latlng[0], latlng[1], weighteds);
//        alert(g.nodes[i].code + " " + i);

    }
    return g;
}

function weighNodes(g) {
    for(var k in g.nodes) {
        // array of dest/weight pairs (objects)
        var weighteds = k.edges;
        var myLat = k.lat, myLng = k.lng;
        var dist = 1;
    }
    return g;
}

function init() {
    var g = weighNodes(fillNodes(new Graph()));
    
//    var service = new google.maps.DistanceMatrixService;
//  service.getDistanceMatrix({
//    origins: [origin1, origin2],
//    destinations: [destinationA, destinationB],
//    travelMode: google.maps.TravelMode.WALKING,
//    unitSystem: google.maps.UnitSystem.METRIC,
//    avoidHighways: false,
//    avoidTolls: false
//  }, function(response, status) {
//    if (status !== google.maps.DistanceMatrixStatus.OK) {
//      alert('Error was: ' + status);
//    } else {
//      var originList = response.originAddresses;
//      var destinationList = response.destinationAddresses;
//      var outputDiv = document.getElementById('output');
//      outputDiv.innerHTML = '';
//      deleteMarkers(markersArray);
//
//      for (var i = 0; i < originList.length; i++) {
//        var results = response.rows[i].elements;
//        
//        for (var j = 0; j < results.length; j++) {
//          outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
//              ': ' + results[j].distance.text + ' in ' +
//              results[j].duration.text + '<br>';
//        }
//      }
//    }
//  });
    alert();
//    var file = 'list.xlsx';
//    XLSX.read(file, {type: 'binary'});
}
    


