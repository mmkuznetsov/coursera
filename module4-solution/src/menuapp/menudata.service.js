(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiPath1', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('ApiPath2', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");


MenuDataService.$inject = ['$http', 'ApiPath1', 'ApiPath2']
function MenuDataService($http, ApiPath1, ApiPath2) {
  var service = this;

    service.getAllCategories = function () {
        return $http({
            method: "GET",
            url: ApiPath1,
        })
        .then(function (result) {
            return result.data;
        })
        .catch(function (error) {
            console.log(error);
        })
    };
    
    service.getMatchedMenuItems = function (categoryShortName) {
        return $http({
            method: "GET",
            url: (ApiPath2  + categoryShortName),
            })
        .then(function (result) {
            return result;
        })
        .catch(function (error) {
            console.log(error);
        })
    };
}

})();
