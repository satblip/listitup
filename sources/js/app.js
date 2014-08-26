document.addEventListener('deviceready', function(){
    navigator.splashscreen.hide();
}, false);

var app = angular.module('app', ['ngRoute','ngAnimate']);


app.config(function($animateProvider) {
  $animateProvider.classNameFilter(/angular-animate/);
})

app.config(function($routeProvider){
    $routeProvider
        .when('/news', {templateUrl: 'partials/news.html'})
        .when('/services', {templateUrl: 'partials/services.html'})
        .when('/repairs', {templateUrl: 'partials/repairs.html'})
        .when('/contact', {templateUrl: 'partials/contact.html'})
        .when('/settings', {templateUrl: 'partials/settings.html'})
        .otherwise({redirectTo: '/news'});
});


// app.directive('disableAnimate', function($animate) {
//     return function($scope, $element){
//         $animate.enabled(false, $element);
//     }
// });

function showMessage(message, callback, title, buttonName) {

    title = title || "Royal Tervuren";
    buttonName = buttonName || 'OK';

    if(navigator.notification && navigator.notification.alert) {

        navigator.notification.alert(
            message,    // message
            callback,   // callback
            "Royal Tervuren",      // title
            buttonName  // buttonName
        );

    } else {

        alert(message);
        callback();
    }

}