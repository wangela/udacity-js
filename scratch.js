function totalBytes(results) {
	var pageStats = results.pageStats;
	var bytesSum = 0;

	bytesSum = Number(pageStats.totalRequestBytes) + Number(pageStats.htmlResponseBytes) + Number(pageStats.cssResponseBytes) + Number(pageStats.imageResponseBytes) + Number(pageStats.javascriptResponseBytes) + Number(pageStats.otherResponseBytes);

	return bytesSum;
}

function ruleList(results) {
	var ruleObj = results.formattedResults.ruleResults;
	var ruleArray = [];
	for (var key in ruleObj) {
		ruleArray.push(ruleObj[key]);

	}
	var ruleResults = [];

	ruleArray.forEach(function (ruleResult) {
		ruleResults.push(ruleResult.localizedRuleName);
	});

	return ruleResults;
}

var psiResults;

psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },
   ...
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       ...
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   ...
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}

function alphabetizer(_names) {
	var revNames = [];
	_names.forEach(splitReverse);

	function splitReverse(oneName) {
		var nameArray = oneName.split(" ");
		var nameArrayLastIndex = nameArray.length - 1;
		var lastName = nameArray[nameArrayLastIndex];
		var sliceIndex = 0 - lastName.length - 1;
		var firstName = oneName.slice(0, sliceIndex);

		var revName = lastName + ", " + firstName;
		console.log(revName);
		revNames.push(revName);
	}

	console.log(revNames);
	return revNames.sort();
}

var names = ["Neil Armstrong", "Buzz Aldrin", "Pete Conrad", "Alan Bean", "Alan Shepard", "Edgar Mitchell", "David Scott", "James Irwin", "John W Young", "Charles Duke", "Eugene Cernan", "Harrison Schmitt"]

alphabetizer(names);

function getRelationship(x, y) {
	if (typeof x === "number" && !isNaN(x)) {
		if (typeof y === "number" && !isNaN(y)) {
			if (x < y) return "<";
			else if (y < x) return ">";
			else if (x === y) return "=";
		}
		else return "Can\'t compare relationships because "+ y + " is not a number";
	}
	else if (typeof y === "number" && !isNaN(y)) return "Can\'t compare relationships because " + x + " is not a number";
	else return "Can\'t compare relationships because " + x + " and " + y + " are not numbers";
}


var rel = getRelationship(2, 3);
console.log(rel);

