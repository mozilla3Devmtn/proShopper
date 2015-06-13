write the map function as though it doesnt exist on the array prototype

Arrray.prototype.map = function(fn){
	var response = [];
	for (var i=0; i < this.length; i++){
		var resultForThisElement = fn(this[i])
		response.push(resultForThisElement);
	}
	return response;
}



function map(array, fn){
	var resultsArray = [];
	for (var i=0; i < array.length; i++){
		var resultForFn = fn(array[i])
		resultsArray.push(resultForFn);
	}
	return results;
}