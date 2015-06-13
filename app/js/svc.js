var app = angular.module('proShopper')

.service('proSvc', function($http){
	this.dropDownArray = [
		{"id":"151","category":"Recreational Vehicles","subcategory":"Airplanes","count":"98"},
		{"id":"145","category":"Recreational Vehicles","subcategory":"ATVs Used (3-4 Wheelers)","count":"1025"},
		{"id":"149","category":"Recreational Vehicles","subcategory":"Travel Trailers, Bumper Pull","count":"2380"},
		{"id":"231","category":"Recreational Vehicles","subcategory":"Generators","count":"197"},
		{"id":"150","category":"Recreational Vehicles","subcategory":"Truck Campers","count":"155"},
		{"id":"144","category":"Recreational Vehicles","subcategory":"Motorcycles, Road Bikes Used","count":"3084"},
		{"id":"143","category":"Recreational Vehicles","subcategory":"Motorhomes","count":"729"},
		{"id":"210","category":"Recreational Vehicles","subcategory":"Motor Scooters","count":"458"},
		{"id":"148","category":"Recreational Vehicles","subcategory":"Personal Watercraft","count":"243"},
		{"id":"146","category":"Recreational Vehicles","subcategory":"Snowmobiles Used","count":"473"},
		{"id":"209","category":"Recreational Vehicles","subcategory":"Travel Trailers, Tent Trailers","count":"335"},
		{"id":"236","category":"Recreational Vehicles","subcategory":"Motorcycles, Dirt Bikes Used","count":"1182"},
		{"id":"237","category":"Recreational Vehicles","subcategory":"Recreational Vehicle Rentals","count":"262"},
		{"id":"247","category":"Recreational Vehicles","subcategory":"Motorcycle Accessories\/Clothing","count":"1057"},
		{"id":"402","category":"Recreational Vehicles","subcategory":"Rock Crawlers","count":"196"},
		{"id":"434","category":"Recreational Vehicles","subcategory":"Travel Trailers, 5th Wheel ","count":"1416"},
		{"id":"436","category":"Recreational Vehicles","subcategory":"Travel Trailers, Toy Hauler ","count":"1164"},
		{"id":"461","category":"Recreational Vehicles","subcategory":"UTVs (Utility Vehicles)","count":"687"},
		{"id":"462","category":"Recreational Vehicles","subcategory":"ATV Parts","count":"569"},
		{"id":"463","category":"Recreational Vehicles","subcategory":"Motorcycles, Dirt Bike Parts","count":"489"},
		{"id":"464","category":"Recreational Vehicles","subcategory":"Motorcycles, Road Bike Parts","count":"767"},
		{"id":"469","category":"Recreational Vehicles","subcategory":"Motorcycles, Road Bikes New","count":"204"},
		{"id":"470","category":"Recreational Vehicles","subcategory":"ATVs New (3-4 Wheelers)","count":"142"},
		{"id":"471","category":"Recreational Vehicles","subcategory":"Motorcycles, Dirt Bikes New","count":"129"},
		{"id":"472","category":"Recreational Vehicles","subcategory":"Snowmobile Parts","count":"238"},
		{"id":"505","category":"Recreational Vehicles","subcategory":"Motorhome and Travel Trailer Parts","count":"305"},
		{"id":"518","category":"Recreational Vehicles","subcategory":"UTV Parts","count":"785"},
		{"id":"531","category":"Recreational Vehicles","subcategory":"Hitches","count":"291"},
		{"id":"536","category":"Recreational Vehicles","subcategory":"Race Cars","count":"76"},
		{"id":"537","category":"Recreational Vehicles","subcategory":"Boat Parts","count":"426"},
		{"id":"544","category":"Recreational Vehicles","subcategory":"Golf Carts","count":"55"},
		{"id":"546","category":"Recreational Vehicles","subcategory":"Boat Accessories\/Toys","count":"249"},
		{"id":"549","category":"Recreational Vehicles","subcategory":"Boat Timeshare","count":"77"},
		{"id":"650","category":"Recreational Vehicles","subcategory":"Enduro","count":"66"},
		{"id":"651","category":"Recreational Vehicles","subcategory":"Dune Buggies","count":"150"},
		{"id":"652","category":"Recreational Vehicles","subcategory":"Go Carts","count":"122"},
		{"id":"662","category":"Recreational Vehicles","subcategory":"Snowmobiles New","count":"31"}];


	this.getDropDownArray = function(){
		console.log('getting categories')
		return $http.get('http://crossorigin.me/http://www.ksl.com/classifieds/api.php?cmd=categories')
			.then(function(response){
				console.log('3', response.data);
				return response.data;
		})
	}
	
	this.runSearch = function(selectedCat, searchTerm){
		console.log('main search running');
		return $http.get('http://crossorigin.me/http://www.ksl.com/classifieds/api.php', {
			params: {
				cmd: 'list',
				s: "225\/40+18",
				nid: selectedCat
			}
		}).then(function(response){
			console.log('4', response);
			return response.data;
		})
	}

	// this.adResults = 
	// 	//replace this with $http call using input data from web form, maybe sort and store on firebase?
	// [{"sid":"35021816","nid":"144","title":"2002 Kawasaki Vulcan 1500 Mean Streak VN1500P","price":"3799.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/608136-1433973786-129275.jpg","display_time":1433974119,"city":"Orem","state":"UT"},
	// {"sid":"35018721","nid":"144","title":"2012 Victory 8-Ball Hammer","price":"8995.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/1423136-1433963837-543981.jpg","display_time":1433964175,"city":"Salt lake city","state":"Ut"},
	// {"sid":"34989705","nid":"144","title":"2003 Kawasaki Vulcan Mean Streak 1500","price":"3995.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/1423136-1433796393-245296.jpg","display_time":1433796732,"city":"Salt lake city","state":"Ut"},
	// {"sid":"34559986","nid":"144","title":"1600 mean streak accepting offers","price":"5400.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/122535-1431092539-730232.jpg","display_time":1433550964,"city":"Sandy","state":"UT"},
	// {"sid":"34942843","nid":"144","title":"2013 Suzuki Boulevard M90 1500","price":"6995.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/1423136-1433776358-30789.jpg","display_time":1433517705,"city":"Salt lake city","state":"Ut"},
	// {"sid":"34942576","nid":"144","title":"2004 Kawasaki Meanstreak 1600 Mean Streak","price":"4000.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/145311-1433516422-900348.jpg","display_time":1433516737,"city":"Logan","state":"UT"},
	// {"sid":"34333386","nid":"144","title":"2002 Kawasaki Vulcan 1500 mean streak!!!!!!!","price":"3000.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/1658558-1429654688-230998.jpg","display_time":1433281135,"city":"Vernal","state":"UT"},
	// {"sid":"34741209","nid":"144","title":"Kawasaki Meanstreak 1600","price":"3800.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/1053660-1432248807-775152.jpg","display_time":1432248804,"city":"Hurricane","state":"UT"},
	// {"sid":"34730180","nid":"144","title":"2003 Kawasaki vulcan mean streak","price":"5000.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/674225-1432172821-708715.jpg","display_time":1432173316,"city":"roy","state":"UT"},
	// {"sid":"34718802","nid":"144","title":"Kawasaki Mean Streak 1600","price":"7500.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/2287894-1432105543-68741.jpg","display_time":1432105993,"city":"West Jordan","state":"UT"},
	// {"sid":"34713541","nid":"144","title":"2003 Kawasaki Vulcan 1500 Mean Streak","price":"3800.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/1326182-1432073128-157511.jpg","display_time":1432073556,"city":"Nephi","state":"UT"},
	// {"sid":"34707073","nid":"144","title":"2004 Kawasaki Meanstreak Mean Streak","price":"4500.00","image":"http:\/\/img.ksl.com\/mx\/mplace-classifieds.ksl.com\/145311-1432049532-438017.jpg","display_time":1432049856,"city":"Logan","state":"UT"}]
		
})