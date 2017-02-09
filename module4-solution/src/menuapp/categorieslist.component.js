(function () {
'use strict';

// Component, called 'categories-list' in the controller template categories.template.html
// is referred to as categoriesList here and is implemented in
// categorieslist.template.html
angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/menuapp/templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
