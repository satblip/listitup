app.factory('Filters', function($http, $q){

    var filters = {

        filters : false,

        getFilters : function(){
            var deferred = $q.defer();
            if (filters.filters !== false){
                deferred.resolve(filters.filters);
            }else{
                $http({method: 'GET', url: './data/filters.json'}).
                    success(function(data, status, headers, config) {
                        filters.filters = data;
                        deferred.resolve(filters.filters);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject('Network Problem!!');
                    });
            } 
            return deferred.promise;
        }
    };
    return filters;

});

app.controller('FitersCtrl', function($scope,Filters){

    $scope.loading = true;
    $scope.recipes = Filters.getFilters().then(function(filters){
        $scope.filters = filters;
        $scope.loading = false;
    }, function(msg){
        $scope.filters = [{
                    "content" : msg,
                    "date" : " Network Issue"
                }]
    });

});