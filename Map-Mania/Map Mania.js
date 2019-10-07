// JavaScript Document
	
      var map;
      function initMap() {
		 var Latlng = {lat: 42.147505, lng: -86.307634};
		  var Latlngnew = {lat: 41.6986, lng: 88.0684};
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.147505, lng: -86.307634},
          zoom: 8
		 });
		  
		  var marker = new google.maps.Marker({
    	  position: Latlng,
    	  map: map,
    	  title: 'Click to zoom'
  });
		  var Box = new google.maps.InfoWindow({
			  content: '<h1>Jollay Orchards</h1>'
		  });
		  marker.addListener('click', function(){
			  Box.open(map, marker);
			  
		  });
							
		   map.addListener('bounds_changed', function() {
		   window.setTimeout(function() {
           map.panTo(marker.getPosition());
           }, 3000);
  });
		 map.addListenerOnce('getBounds', function() {
		   alert(this.getBounds('Latlngnew'));
		});
		  google.maps.event.addListener(map, 'zoom_changed', function() {
    		var zoom = map.getZoom();
			  	console.log("Zoom" +zoom);
});
      }