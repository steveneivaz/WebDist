var animalContainer = document.getElementById("animal-info");
var button = document.getElementById("button");

button.addEventListener("click", function(){
	var Request = new XMLHttpRequest();
	Request.open('Get', 'https://mustang-index.azurewebsites.net/index.json');
	Request.onload = function(){
	console.log(Request.responseText);
	var Data = JSON.parse(Request.responseText);
	renderHTML(Data);
		
};
Request.send();
});


function renderHTML(data){
	var htmlString = "";
	
	for (i=0; i < data.length; i++){
		htmlString += "<p>" + data[i].Name + "  " + data[i].Email +  "  " + "ContactURL" + ".</p>";
	}
	animalContainer.insertAdjacentHTML('beforeend', htmlString);
}