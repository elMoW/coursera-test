(function() {
    'use strict';

    angular.module('ShoppingListCheckOffApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    // two controllers

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

        toBuy.boughtItem = function(itemIndex) {
            ShoppingListCheckOffService.boughtItem(itemIndex);
        };

    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getItemsBought();
    }
    
    function ShoppingListCheckOffService() {
        var service = this;
        // items for the to buy list
        var itemsToBuy = [
            {
              name: "Milk",
              quantity: "2"
            },
            {
              name: "Donuts",
              quantity: "200"
            },
            {
              name: "Cookies",
              quantity: "300"
            },
            {
              name: "Chocolate",
              quantity: "5"
            },
            {
              name: "Banana Milk",
              quantity: "2"
            }
          ];

        var itemsBought = [];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

        service.boughtItem = function (itemIndex) {
            var boughtItem = itemsToBuy[itemIndex];
            // console.log(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex,1);
            service.addItem(boughtItem.name, boughtItem.quantity);
          };

          service.addItem = function (itemName, quantity) {
            var item = {
              name: itemName,
              quantity: quantity
            };
            itemsBought.push(item);
          };

    }

})();