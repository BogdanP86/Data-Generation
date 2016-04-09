var divs = [];
var myData;


function include(file){

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head')[0].appendChild(script);

}
	include("http://zen.unomodo.net/thing/divs.js");
	include("http://zen.unomodo.net/thing/svgs.js");

function init(){ 

	var xmlhttp = new XMLHttpRequest();
	var url = "http://zen.unomodo.net/thing/copy.json";
	xmlhttp.onreadystatechange = function() {
    	if (xmlhttp.readyState == 4 && xmlhttp.status == 0) {
	        myData = JSON.parse(xmlhttp.responseText);
	        sendDataToPage(myData);
   		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function sendDataToPage(myData){
	addTitle();
	addDivsToPage(divs,myData);	
}