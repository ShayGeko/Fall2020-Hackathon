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
	  scanDocument(document.body);
	};
	request.send();

})



function replaceWords(data)
{
	
	var temp = data.nodeValue;

	if(!dataLoaded){
    	temp = temp.replace(/\bJoe Biden\b/gi, "Jovicevic Bojevic");
		temp = temp.replace(/\bDonald Trump\b/gi, "Dubravko Terkinovic");
		temp = temp.replace(/\bUSA\b/gi, "Serbia");
		temp = temp.replace(/\bUS\b/g, "Serbia");
		temp = temp.replace(/\bUnited Stated of America\b/gi, "Serbia");
		temp = temp.replace(/\bthe United States\b/gi, "Serbia");
		temp = temp.replace(/\bUnited States\b/gi, "Serbian");
		temp = temp.replace(/\bAmerican\b/gi, "Serbian");
	}
	else{
		console.log(censorList);
		for (i = 0; i<= censorList.length ; ++i)
		{
			var str1 = censorList[i].toCensor;
			var str2 = censorList[i].censorWith;
			str1 = new RegExp(str1, "g");
			str2 = new RegExp(str2, "g");
			temp = temp.replace(str1, str2);
		}
	}

	
	data.nodeValue = temp;
}



scanDocument(document.body);