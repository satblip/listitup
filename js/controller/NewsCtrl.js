app.factory('News', function($http, $q){

    var news = {

        news : false,

        getNews : function(){
            var deferred = $q.defer();
            if (news.news !== false){
                deferred.resolve(news.news);
            }else{
                $http({method: 'GET', url: 'http://www.pvimmo.com/royaltest/news.json'}).
                    success(function(data, status, headers, config) {
                        news.news = data;
                        deferred.resolve(news.news);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject('Network Problem!!');
                        // return [{
                        //     "content" : "",
                        //     "date" : "12th of january 2014"
                        // }]
                    });
            } 
            return deferred.promise;
        }
    };
    return news;

});

app.controller('NewsCtrl', function($scope,News){

    $scope.loading = true;
    $scope.news = News.getNews().then(function(news){
        $scope.news = news;
        $scope.loading = false;
    }, function(msg){
        $scope.news = [{
                    "content" : msg,
                    "date" : " Network Issue"
                }]
    });

});