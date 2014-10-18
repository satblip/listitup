// app.factory('BasicInfo', function($http, $q){

//     var basicInfo = {

//         basicInfo : false,

//         getBasicInfo : function(){
//             var deferred = $q.defer();
//             if (basicInfo.basicInfo !== false){
//                 deferred.resolve(basicInfo.basicInfo);
//             }else{
//                 $http({method: 'GET', url: 'http://www.pvimmo.com/royaltest/basicInfo.json'}).
//                     success(function(data, status, headers, config) {
//                         basicInfo.basicInfo = data;
//                         deferred.resolve(basicInfo.basicInfo);
//                     }).
//                     error(function(data, status, headers, config) {
//                         deferred.reject('Network Problem!!');
//                     });
//             } 
//             return deferred.promise;
//         }
//     };
//     return basicInfo;

// });

app.controller('OneRecipesCtrl', function($scope,$rootScope,$routeParams,Recipes){



    console.log($routeParams);

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
    // $scope.panelServiceBasic = function(){
    //     $scope.info = BasicInfo.getBasicInfo().then(function(info){
    //         $scope.info = info;
    //         $rootScope.servicesPanel  = 1;
    //         $scope.loader = false;
    //     });
    // };

    // $scope.panelServiceClassic = function(){
    //     $rootScope.servicesPanel  = 2;
    //     $scope.loader = false;
    // };

    // $scope.panelServiceMaid = function(){
    //     $scope.info = BasicInfo.getBasicInfo().then(function(info){
    //         $scope.info = info;
    //         $rootScope.servicesPanel  = 3;
    //         $rootScope.maidPanel  = 0;
    //         $scope.loader = false;
    //     });
    // };

    // $scope.panelServiceMaidAddDate = function(){
    //     $scope.info = BasicInfo.getBasicInfo().then(function(info){
    //         $scope.info = info;
    //         $rootScope.servicesPanel  = 3;
    //         $rootScope.maidPanel  = 1;
    //         $scope.loader = false;
    //     });
    // };

    // $scope.panelServiceMaidChangeDay = function(){
    //     $scope.info = BasicInfo.getBasicInfo().then(function(info){
    //         $scope.info = info;
    //         $scope.maid = {changeDay: info.maidNextDay, changeTime: info.maidNextTime};
    //         $rootScope.servicesPanel = 3;
    //         $rootScope.maidPanel  = 2;
    //         $scope.loader = false;
    //     });
    // };

    // $scope.panelServicePrivate = function(){
    //     $rootScope.servicesPanel  = 4;
    //     $scope.loader = false;
    // };

    // $scope.processServiceClassicRequest = function(data){
    //     console.log(data);
    // };

    // $scope.processServiceMaidAddDate = function(data){
    //     console.log(data);
    // };

    // $scope.processServiceMaidChangeDay = function(data){
    //     console.log(data);
    // }



});