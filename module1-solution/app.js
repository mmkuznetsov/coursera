(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    $scope.itemList = "";
    $scope.myMessage = "";
    $scope.myStyle;
    
    $scope.checkIfTooMuch = function () {
        var Message;
        var Style;
        
        if ($scope.itemList.length === 0) {
            Message = "Please enter data first";
            Style = {"color" : "red"};
        }
        else {
            var arrayOfStrings = $scope.itemList.replace(/\s+/g, '').split(',');
            arrayOfStrings = arrayOfStrings.filter(function(e){return e});

            if (arrayOfStrings.length < 4) {
                Message = "Enjoy!";
                Style = {"color" : "green"};
            }
            else {
                Message = "Too much!"; 
                Style = {"color" : "green"};
            }
        }
        
        $scope.myMessage = Message;
        $scope.myStyle = Style;
    };
}

})();
