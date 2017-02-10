(function () {
'use strict';

// Component, called 'items-list' in the controller template items.template.html
// is referred to as itemsList here and is implemented in
// itemslist.template.html
angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'src/menuapp/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();