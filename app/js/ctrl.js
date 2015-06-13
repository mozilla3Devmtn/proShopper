var app = angular.module('proShopper')

.controller('proCtrl', function($scope, proSvc){//inject ng-dropdown-multiselect and .config, should that be a different service?
	// $scope.mainCat = proSvc.dropDownArray.category;
	$scope.dropDownCategories = proSvc.dropDownArray;
	// $scope.results = proSvc.runSearch($scope.selectedCat, $scope.searchTerm); //used to be proSvc.adResults;

	$scope.selectedCat = []; 
	$scope.listCats = proSvc.dropDownArray;	
	$scope.example2data = proSvc.dropDownArray;
	$scope.dropDownSettings = {enableSearch: true, displayProp: 'subcategory', idProp: 'id', scrollableHeight: '400px',
    scrollable: true};
    // $scope.test = function(){
    // 	debugger;
    // }
	// var searchParams = [$scope.lowPrice, $scope.highPrice, $scope.searchTerm]
	// $scope.runSearch = proSvc.mainSearch(searchParams)
	console.log($scope.lowPrice)
	console.log($scope.highPrice)
	console.log($scope.searchTerm)
	console.log('2' + $scope.listCats)
	//add some functions to sort incoming data from the service based on search criteria

	$scope.getDropDownArray = function(){
		proSvc.getDropDownArray()
		.then(function(results){
			console.log(results)
			$scope.allCats = results;
		})
	}


	$scope.getDropDownArray();
	$scope.runSearch = function(){
		proSvc.runSearch($scope.selectedCat[0].id, $scope.searchTerm)
		.then(function(results){
			$scope.results = results;
		})
	}
})

