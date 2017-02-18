(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
var $ctrl = this;
  
  $ctrl.submit = function () {
    console.log($ctrl.user.menunumber);
    MenuService.getItemByShortName($ctrl.user).then(function (result) {
            //console.log(result);
            $ctrl.message = "Your information has been saved";
            return result;
        })
        .catch(function (error) {
            $ctrl.message = "No such menu number exists";
            //console.log(error);
        })
  };    
}

})();
