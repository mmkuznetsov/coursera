(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html'
      //template: "hello"
  };

console.log("we are here");
  return ddo;
}
    
NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
    var narrowedDownList = this;
    $scope.searchTerm = "";
    
    narrowedDownList.logMenuItems = function () {
        //narrowedDownList.found = [4, 5, 6, 7]; 
         MenuSearchService.getMatchedMenuItems($scope.searchTerm).then(function(data){
            narrowedDownList.found = data;
            console.log(narrowedDownList.found);
        });
    }
}

MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath) {
    var service = this;
    
    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: "GET",
            url: ApiPath,
            }).then(function (result) {
            //console.log("Search Term: " + searchTerm);
            //console.log(result.data);
            // process result and only keep items that match
            var foundItemsList = new Array();
            for (var i = 0; i < result.data.menu_items.length; i++) {
                var menuItemDesc = result.data.menu_items[i].description;
                //console.log(menuItemDesc);
                if (menuItemDesc.includes(searchTerm)) {
                    //console.log("Found: " + searchTerm);
                    foundItemsList.push(result.data.menu_items[i]);
                }
            }
            // return processed items
            console.log(foundItemsList);            
            return foundItemsList;
        }).catch(function (error) {
            console.log(error);
        })
    };
}
    
})();
