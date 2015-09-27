function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 30.286, lng: -97.735},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}
 
//displays map on page load
google.maps.event.addDomListener(window, 'load', initMap);

function plotWalk(walkPathCoords) {
    var walkPath = new google.maps.Polyline({
    path: walkPathCoords,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 5
  });
    
  walkPath.setMap(map);
}
    