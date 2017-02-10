(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// 'items' is injected through state's resolve
ItemsController.$inject = ['catitems']
function ItemsController(catitems) {
    var items = this;
    
    items.items = catitems;
}

})();