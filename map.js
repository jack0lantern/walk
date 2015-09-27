function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(30.286, -97.735),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas,mapOptions);
}



google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
  $("#submit-button").click(function() {
  // Instead of directly editing CSS, toggle a class
  	$('.form').fadeOut('slow');
  	$(map).css("opacity", 10);
  });
});


