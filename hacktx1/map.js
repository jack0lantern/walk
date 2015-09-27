function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 30.286, lng: -97.737},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var walkPathCoords = [
   {lat: 30.289039, lng: -97.739754}, 
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
{lat: 30.284528, lng: -97.738296}
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


$(document).ready(function() {
  $("#submit-button").click(function() {
  // Instead of directly editing CSS, toggle a class
    $('.form').fadeOut('slow');
    $(map).css("opacity", 10);
  });
});


