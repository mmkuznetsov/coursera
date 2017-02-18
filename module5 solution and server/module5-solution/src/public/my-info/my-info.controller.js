(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath','user'];
function MyInfoController(ApiPath, user) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.basePath = ApiPath;
}

})();
