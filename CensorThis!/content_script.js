function scanDocument(webData)
{
	
	
	var element, nextElement;

	if (webData.nodeType == 1 || webData.nodeType == 9 || webData.nodeType == 11)
	{
		element = webData.firstChild;
		while (element)
		{
			nextElement = element.nextSibling;
			scanDocument(element);
			element = nextElement;
		}
	}
	else if (webData.nodeType == 3)
	{
		replaceWords(webData);
	}
}

var dataLoaded = false;
var censorList = [];

$(document).ready(function(){
	var url = 'http://127.0.0.1:8002/api/censorList/';
	let request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'json';

	request.onload = function() {
	  console.log(request.response);
	  censorList = request.response.results;
	  dataLoaded = true;
	  replaceWords();	
	};
	request.send();

})



function replaceWords(data)
{
	console.log(dataLoaded);
	if(!dataLoaded){
		var temp = data.nodeValue;
    	temp = temp.replace(/\bJoe Biden\b/gi, "Jovicevic Bojevic");
		temp = temp.replace(/\bDonald Trump\b/gi, "Dubravko Terkinovic");
		temp = temp.replace(/\bUSA\b/gi, "Serbia");
		temp = temp.replace(/\bUS\b/g, "Serbia");
		temp = temp.replace(/\bUnited Stated of America\b/gi, "Sebia");
		temp = temp.replace(/\bthe United States\b/gi, "Serbia");
		temp = temp.replace(/\bUnited States\b/gi, "Serbian");
		temp = temp.replace(/\bAmerican\b/gi, "Serbian");
		data.nodeValue = temp;
	}
	else{
		console.log("data loaded");
		alert("fucking loaded");
		for (i = 0; i<= censorList.length ; ++i)
		{
			str1 = listofReplacements[i]
			str2 = listofReplacements[i+1]
			str1 = new RegExp(str1, "g");
			str2 = new RegExp(str2, "g");
			temp = temp.replace(str1, str2);
		}
	}
}



scanDocument(document.body);