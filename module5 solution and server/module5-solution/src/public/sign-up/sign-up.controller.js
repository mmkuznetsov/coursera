(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

//MenuController.$inject = ['menuCategories'];
function SignUpController() {
  var $ctrl = this;
  
  $ctrl.submit = function () {
    console.log($ctrl.user.username);
    $ctrl.completed = true;
  };    
}

})();
