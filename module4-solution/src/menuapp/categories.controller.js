(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


//CategoriesController.$inject = ['items'];
//function CategoriesController(items) {
function CategoriesController() {    
  var categories = this;
  //categories.items = items;
  categories.items = [];

  // Remove when data module is working
  categories.$onInit = function () {
    categories.items = [1, 2, 3];
  };
}

})();
