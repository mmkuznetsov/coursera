(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
        items: '<',
        onRemove: '&'
    }
  };

  return ddo;
}
    
NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
    var narrowedDownList = this;
    narrowedDownList.showMessage = false; 
    $scope.searchTerm = "";

    
    narrowedDownList.logMenuItems = function () {
        narrowedDownList.found = [];
        if ($scope.searchTerm.length === 0){
                narrowedDownList.showMessage = true;
                return;
            }
        MenuSearchService.getMatchedMenuItems($scope.searchTerm).then(function(data){
            narrowedDownList.found = data;
            if (narrowedDownList.found.length === 0){
                narrowedDownList.showMessage = true;
            }
            else{
            narrowedDownList.showMessage = false;
            }
            //console.log(narrowedDownList.found);
        }).catch(function (error) {
            console.log(error);
        });
    };

    
    narrowedDownList.removeItem = function (itemIndex) {
        //console.log("'this' is: ", this);
        narrowedDownList.found.splice(itemIndex, 1);
    };    
}

    
MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath) {
    var service = this;
    
    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: "GET",
            url: ApiPath,
            }).then(function (result) {
            // process result and only keep items that match
            var foundItemsList = new Array();
            for (var i = 0; i < result.data.menu_items.length; i++) {
                var menuItemDesc = result.data.menu_items[i].description;
                if (menuItemDesc.includes(searchTerm)) {
                    foundItemsList.push(result.data.menu_items[i]);
                }
            }
            // return processed items
            //console.log(foundItemsList);            
            return foundItemsList;
        }).catch(function (error) {
            console.log(error);
        })
    };
}
    
})();
