(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    
    toBuyList.moveItem = function (itemIndex) {
        ShoppingListCheckOffService.moveItem(itemIndex);
    };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this;
    
    alreadyBoughtList.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
        {name: "Gallon of Milk", quantity: 1},
        {name: "Bagles", quantity: 4},
        {name: "Yogurts", quantity: 3},
        {name: "Bananas", quantity: 6},
        {name: "Cream Cheese", quantity: 1}];
    
    var alreadyBoughtItems = [];

    service.getToBuyItems = function () {
        return toBuyItems;
    };
    
    service.getAlreadyBoughtItems = function () {
        return alreadyBoughtItems;
    };

    service.moveItem = function (itemIndex) {
        var item = toBuyItems.splice(itemIndex, 1)[0];
        alreadyBoughtItems.push(item);
  };
}
    
})();
