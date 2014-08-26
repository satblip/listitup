app.factory('BasicInfo', function(){

    var basicInfo = {

        basicInfo : {
            "phonePolice" : "122",
            "phoneFiremen" : "100",
            "phoneConcierge" : "027777777",
            "wifiName" : "AA4_Wifi",
            "wifiPass" : "bonaldokeijs",
            "maidNextDate" : "26/4/2013 - 09:00",
            "maidNextDay" : "Tuesday",
            "maidNextTime" : "15:00",
            "maidPhoneNumber" : "0488888888"
        },
        getBasicInfo : function(){
            return basicInfo.basicInfo;
        }
    };
    return basicInfo;

});

app.controller('ServicesCtrl', function($scope,$rootScope,BasicInfo){

    $scope.panelServiceBasic = function(){
        $scope.info = BasicInfo.getBasicInfo();
        $rootScope.servicesPanel  = 1;
        $scope.loader = false;
    };

    $scope.panelServiceClassic = function(){
        $rootScope.servicesPanel  = 2;
        $scope.loader = false;
    };

    $scope.panelServiceMaid = function(){
        $scope.info = BasicInfo.getBasicInfo();
        $rootScope.servicesPanel  = 3;
        $rootScope.maidPanel  = 0;
        $scope.loader = false;
    };

    $scope.panelServiceMaidAddDate = function(){
        $scope.info = BasicInfo.getBasicInfo();
        $rootScope.servicesPanel  = 3;
        $rootScope.maidPanel  = 1;
        $scope.loader = false;
    };

    $scope.panelServiceMaidChangeDay = function(){
        $scope.info = BasicInfo.getBasicInfo();
        $rootScope.servicesPanel = 3;
        $rootScope.maidPanel  = 2;
        $scope.loader = false;
    };

    $scope.panelServicePrivate = function(){
        $rootScope.servicesPanel  = 4;
        $scope.loader = false;
    };

});