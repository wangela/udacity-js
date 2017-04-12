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

var stockPricesYesterday = [10, 7, 5, 8, 11, 9]
// var stockPricesYesterday = [11, 10, 8, 5, 3]

getMaxProfit (stockPricesYesterday);

function getMaxProfit(prices) {
  // check for bad inputs:
  // * prices.length < 2
  // * prices are not numbers or are undefined

  var sortedPrices = prices.entries();
  var n = 0;
  var minPrice = 0; // could have initialized to prices[0]
  var prevPrice = 0;
  var currProfit = 0;
  var maxProfit = 0; // could have initialized to prices[1] - prices[0]
  // O(1) space

  for (let e of sortedPrices) { // greedy approach: "best answer so far" during single pass through the input
    n = parseInt(e[1]);

    if (e[0] === 0) {
      minPrice = n;
      prevPrice = n;
    } else if (n < minPrice) { // minPrice = Math.min(minPrice, n)
      minPrice = n;
      currProfit = n - prevPrice;
      prevPrice = n;
      console.log("Min Price = " + minPrice);
    } else {
      currProfit = n - minPrice;
      prevPrice = n;
      console.log("Curr Profit = " + currProfit);
    }

    if (e[0] === 1) {
      maxProfit = currProfit;
    } else if (currProfit > maxProfit) { // maxProfit = Math.max(maxProfit, currProfit)
        maxProfit = currProfit;
        console.log("Max Profit = " + maxProfit);
    }
  }
  // O(n) time

  return maxProfit;
}

var inputNums = [1, 7, 4, 3];

getProductsOfAllIntsExceptAtIndex(inputNums);

function getProductsOfAllIntsExceptAtIndex(funnies) {
  // check for bad inputs:
  // * prices.length < 2
  // * prices are not numbers or are undefined

  var resultArray = [];
  var prevProduct = 1;
//  var currProduct = 1;
//  var stop = funnies.length - 1;

  for (var i = 0; i < funnies.length; i++) { // collect products before current index
    resultArray[i] = prevProduct;
    console.log("resultArray[" + i + "] = " + resultArray[i]);
    prevProduct *= prevProduct * funnies[i];
  }

  prevProduct = 1;

  for (var i = funnies.length - 1; i >= 0; i--) { // collect products after current index
    resultArray[i] *= prevProduct;
    console.log("resultArray[" + i + "] = " + resultArray[i]);
    prevProduct *= funnies[i];
  }

  // BRUTE FORCE SOLUTION - didn't notice pattern of re-doing the same calculations over and over again
  // for (var i = 0; i < stop; i++) {
  //   for (var n = 0; n < stop; n++){
  //     if (n != i) {
  //       currProduct = currProduct * funnies[n];
  //     }
  //   }
  //   currProduct = currProduct * funnies[stop];
  //   resultArray[i] = currProduct;
  //   console.log("resultArray[" + i + "] = " + resultArray[i]);
  //   currProduct = 1;
  // }
  // for (var n = 0; n < stop; n++) {
  //   currProduct = currProduct * funnies[n];
  // }
  // resultArray[stop] = currProduct;
  // console.log("resultArray[" + stop + "] = " + resultArray[stop]);  

  return resultArray;
}

intList = [3, 4, -5, 7, 9, 11]

function maxTripleProduct(list_of_ints) {
  var maxIndex = list_of_ints.length - 1;
  var maxMinusThree = maxIndex - 3;
  var product = 1;
  var negProduct = 0;
  list_of_ints.sort(function (a, b) {
    return a - b;
  });

  for (var i = maxIndex; i > maxMinusThree; i--) {
    product *= list_of_ints[i];
  }

  negProduct = list_of_ints[0] * list_of_ints[1] * list_of_ints[maxIndex];

  console.log(product);
  console.log(negProduct);

  if (product > negProduct) return product;
  else return negProduct;
}

unsorted_scores = [37, 89, 41, 65, 91, 53]
HIGHEST_POSSIBLE_SCORE = 100

function sortScores(scores, highest) {
  var scoreMap = {};
  var sortedScores = [];
  for (i = 0; i < scores.length; i++) {
    var currScore = scores[i];
    scoreMap[currScore] = (scoreMap[currScore] || 0) + 1;
  }

  for (var key in scoreMap) {
    for (i= 0; i < scoreMap[key]; i++) {
      sortedScores.push(key);
    }
  }

  return sortedScores;
}
