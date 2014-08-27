app.controller('NavCtrl', function($scope,$rootScope,$location){

	$rootScope.servicesPanel = 0;

	console.log("poney");

    switch($location.path()) {
	    case '/news':
	        $scope.menu = 'news';
	        break;
	    case '/services':
	        $scope.menu = 'services';
	        console.log("poney2");
	        break;
	    case '/repairs':
	        $scope.menu = 'repairs';
	        break;
	    case '/contact':
	        $scope.menu = 'contact';
	        break;
	    case '/settings':
	        $scope.menu = 'settings';
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