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

function replaceWords(data)
{

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


scanDocument(document.body);
