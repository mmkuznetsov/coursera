(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
    service.user = {};
    service.user.signedIn = false;

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
      //console.log("Service: " + user.menunumber)
    return $http.get(ApiPath + '/menu_items/' + user.menunumber + '.json').then(function (response) {
      user.data = response.data;
      service.user = user; 
      service.user.signedIn = true;
      //console.log(response.data);  
      return response.data;
    });
  };

  service.getUser = function () {
      console.log(service.user.data);  
      return service.user;
  };
}

})();
