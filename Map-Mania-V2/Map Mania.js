// JavaScript Document
	
      var map;

  var favoritePlaces = [
    {content:'<strong>#1: Bolingbrook IL<strong>', coordinates:{lat:41.6986,lng:88.0684}, iconImagePath:"one.png"},
    {content:'<strong>#2: Lewis University<strong>', coordinates:{lat:41.6048,lng:88.0805}, iconImagePath:"two.png"},
    {content:'Venice, Italy', coordinates:{lat:45.4408,lng:12.3155}, iconImagePath:"flag.png"},
    {content:'Nord Pas De Calais, France', coordinates:{lat:50.4801,lng:2.7937}, iconImagePath:"flag.png"},
    {content:'Japan', coordinates:{lat:36.2048,lng:-138.2529}, iconImagePath:"flag.png"},
    {content:'Hamburg, Germany', coordinates:{lat:53.5511,lng:9.9937}, iconImagePath:"flag.png"},
    {content:'Best Buy, Bolingbrook', coordinates:{lat:41.6986,lng:88.0684}, iconImagePath:"flag.png"},
    {content:'Jollay Orchard', coordinates:{lat: 42.147505, lng: -86.307634}, iconImagePath:"flag.png"},
    {content:'Bristol England', coordinates:{lat:51.4545,lng:2.5879}, iconImagePath:"flag.png"},
    {content:'Toronto, Canada', coordinates:{lat:43.6532,lng:79.3832}, iconImagePath:"flag.png"}
]; 
      function initMap() {
		  console.log('Map Mania Lite - Starting!');
		 
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.147505, lng: -86.307634},
          zoom: 8
		 });
		  
		  
		  var Box = new google.maps.InfoWindow({
			  content: '<h1>Jollay Orchards</h1>'
		  });
		  
							
		   
		 map.addListenerOnce('getBounds', function() {
		   alert(this.getBounds('Latlngnew'));
		});
		  google.maps.event.addListener(map, 'zoom_changed', function() {
    		var zoom = map.getZoom();
			  	console.log("Zoom" +zoom);
});
      }

function update() {
    var zoomLevel = Map.getZoom()
    var inBounds = false;
	
		if (gMap.getBounds().contains(favoritePlaces)) {
        inBounds = true;
    }
	console.log("Getting closer")
	var score = 0;
	var score = score + 1;
	
	SetScore(score)
	
}

function SetHint(hint) {
    document.getElementById("hint-id").value = hint; 
	
}

function SetScore() {
    document.getElementById("score-id").value = score; 
}

	
	
	
	