app.controller('NavCtrl', function($scope,$rootScope,$location){

	$rootScope.servicesPanel = 0;

	console.log("poney");

    switch($location.path()) {
	    case '/recipes':
	        $scope.menu = 'recipes';
	        break;
	    case '/my-recipes':
	        $scope.menu = 'my-recipes';
	        break;
	    default:
	        $scope.menu = 'news';
	}

	$scope.navAction = function(id){
		$scope.menu = id;
		if(id === 'services' && $rootScope.servicesPanel != 0){
			$rootScope.servicesPanel = 0;
		}
		// if(id === 'services' && $rootScope.maidPanel != 0){
		// 	console.log('poney2');
		// 	$rootScope.maidPanel = 0;
		// }
	}

});