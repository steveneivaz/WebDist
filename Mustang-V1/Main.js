var Container = document.getElementById("info");
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
		htmlString += "<p>" + data[i].Name + "  " + data[i].Email +  "  " + data[i].ContactURL + ".</p>";
	}
	Container.insertAdjacentHTML('beforeend', htmlString);
}

var contactURLArray = [];
var contactArray = [];
var loadingContact = 0;

function loadIndex() {
    var Request = new XMLHttpRequest();
	var htmlString = "";
    Request.open('GET', 'https://mustang-index.azurewebsites.net/index.json');
    Request.onload = function() {
        console.log("Index JSON:" + Request.responseText);
        document.getElementById("indexID").innerHTML = Request.responseText;
        contactIndex = JSON.parse(Request.responseText);
		
	
        for (i=0; i<contactIndex.length; i++) {
            contactURLArray.push(contactIndex[i].ContactURL);
			
			
        }
        console.log("ContactURLArray: " + JSON.stringify(contactURLArray));
	
    }
    Request.send();
}

function loadContacts() {
    
    contactArray.length = 0;
    loadingContact = 0;

   
    if (contactURLArray.length > loadingContact) {
        loadNextContact(contactURLArray[loadingContact]);
    }
}

function loadNextContact(URL) {
    console.log("URL: " + URL);
    contactRequest = new XMLHttpRequest();
    contactRequest.open('GET', URL);
    contactRequest.onload = function() {
        console.log(contactRequest.responseText);
        var contact;
        contact = JSON.parse(contactRequest.responseText);
        console.log("Contact: " + contact.firstName);
        contactArray.push(contact);
        document.getElementById("contactsID").innerHTML = JSON.stringify(contactArray);

        loadingContact++;
        if (contactURLArray.length > loadingContact) {
            loadNextContact(contactURLArray[loadingContact]);
        }
    }

    contactRequest.send();
}

function logContacts() {
    console.log(contactArray);
}
