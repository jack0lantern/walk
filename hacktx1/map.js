function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 30.286, lng: -97.735},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var walkPathCoords = [
    {lat: 30.291972, lng: -97.741168},
    {lat: 30.291899, lng: -97.740028},
    {lat: 30.291795, lng: -97.738916}
  ];
  var walkPath = new google.maps.Polyline({
    path: walkPathCoords,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 5
  });
    
  walkPath.setMap(map);
}
 
//displays map on page load
google.maps.event.addDomListener(window, 'load', initMap);