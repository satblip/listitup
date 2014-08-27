app.controller('ContactCtrl', ['$scope', function($scope) {
    $scope.send = function(data) {
      console.log(data);
      showMessage("ca se passe mal", alert("ok"), "Royal Tervuren", "Poney");
    };
}]);