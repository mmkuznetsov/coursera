(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
    service.users = [];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getItemByShortName = function (user) {
      console.log("Service: " + user.menunumber)
    return $http.get(ApiPath + '/menu_items/' + user.menunumber + '.json').then(function (response) {
      user.data = response.data;
      service.users.push(user);  
      console.log(response.data);  
      return response.data;
    });
  };

}



})();
