// JavaScript Document
	
      var map;
      function initMap() {
		 var Latlng = {lat: 42.147505, lng: -86.307634};
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.147505, lng: -86.307634},
          zoom: 8
		 });
		  
		  var marker = new google.maps.Marker({
    	  position: Latlng,
    	  map: map,
    	  title: 'Click to zoom'
  });
		   map.addListener('bounds_changed', function() {
    	   window.setTimeout(function() {
           map.panTo(marker.getPosition());
           }, 3000);
  });
		 
      }