(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath','user'];
function MyInfoController(ApiPath, user) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.basePath = ApiPath;
//console.log($ctrl.user);
    
//MyInfoController.$inject = ['MenuService'];
//function MyInfoController(MenuService) {
//    var $ctrl = this;
//
//    $ctrl.$onInit = function () {
//     $ctrl.user = MenuService.getUser();
//    console.log($ctrl.user.menunumber);
//    };


//  $ctrl.submit = function () {
//    console.log($ctrl.user.menunumber);
//    MenuService.getItemByShortName($ctrl.user).then(function (result) {
//            console.log(result);
//            $ctrl.message = "Your information has been saved";
//            return result;
//        })
//        .catch(function (error) {
//            $ctrl.message = "No such menu number exists";
//            console.log(error);
//        })
//   // $ctrl.completed = true;
//  };    
}

})();
