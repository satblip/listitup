app.factory('Recipes', function($http, $q){

    var recipes = {

        recipes : false,

        getRecipes : function(){
            var deferred = $q.defer();
            if (recipes.recipes !== false){
                deferred.resolve(recipes.recipes);
            }else{
                $http({method: 'GET', url: './data/recipes.json'}).
                    success(function(data, status, headers, config) {
                        recipes.recipes = data;
                        deferred.resolve(recipes.recipes);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject('Network Problem!!');
                    });
            } 
            return deferred.promise;
        }
    };
    return recipes;

});

app.controller('RecipesCtrl', function($scope,Recipes){

    $scope.loading = true;
    $scope.recipes = Recipes.getRecipes().then(function(recipes){
        $scope.recipes = recipes;
        $scope.loading = false;
    }, function(msg){
        $scope.recipes = [{
                    "content" : msg,
                    "date" : " Network Issue"
                }]
    });

});