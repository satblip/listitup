document.addEventListener('deviceready', function(){
    navigator.splashscreen.hide();
}, false);

var app = angular.module('app', ['ngRoute','ngAnimate']);


app.config(function($animateProvider) {
  $animateProvider.classNameFilter(/angular-animate/);
})

app.config(function($routeProvider, $httpProvider){
    $routeProvider
        .when('/recipes', {templateUrl: 'partials/recipes.html'})
        .when('/my-recipes', {templateUrl: 'partials/my-recipes.html'})
        .when('/one-recipe/:id', {templateUrl: 'partials/one-recipe.html'})
        .when('/filters', {templateUrl: 'partials/filters.html'})
        // .when('/settings', {templateUrl: 'partials/settings.html'})
        .otherwise({redirectTo: '/recipes'});
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    delete $httpProvider.defaults.headers.common['Content-Type'];
});

// app.directive('disableAnimate', function($animate) {
//     return function($scope, $element){
//         $animate.enabled(false, $element);
//     }
// });

function showMessage(message, callback, title, buttonName) {

    title = title || "Royal Tervuren";
    buttonName = buttonName || 'OK';

    jembe.alert.show({
        message:message,
        callback: callback,
        title:title,
        buttons:buttonName,
    });

    // if(navigator.notification && navigator.notification.alert) {

    //     navigator.notification.alert(
    //         message,    // message
    //         callback,   // callback
    //         title,      // title
    //         buttonName  // buttonName
    //     );

    // } else {

    //     alert(message);
    //     callback();
    // }

}