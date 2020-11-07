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

//function readFile()
//{
//	var fs = require("fs");
//	var text = fs.readFileSync('replacement.txt');
//	var textByLine = text.split(",\n")
//	return textByLine
//}



function replaceWords(data)
{
//	var listofReplacements = readFile()
	var temp = data.nodeValue;

//		for (i = 0; i<= listofReplacements.length ; i+=2)
//		{
//			str1 = listofReplacements[i]
//			str2 = listofReplacements[i+1]
//			str1 = new RegExp(str1, "g");
//			str2 = new RegExp(str2, "g");
//			temp = temp.replace(str1, str2);
//		}

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
