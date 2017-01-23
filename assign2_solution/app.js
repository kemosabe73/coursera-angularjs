(function(){
    'use strict';

    angular.module('ShoppingListApp', [])
    .controller('ToBuyController', ToBuyController)
    .controller('BoughtController', BoughtController)
    .service('ShoppingListService', ShoppingListService)

    ToBuyController.$inject  = ['ShoppingListService'];
    function ToBuyController(ShoppingListService){
        var toBuyList = this;

        toBuyList.items = ShoppingListService.getToBuyItems();

        toBuyList.buyItem = function(itemIndex){
            ShoppingListService.buyItem(itemIndex);
        }
    }

    BoughtController.$inject = ['ShoppingListService'];
    function BoughtController(ShoppingListService){
        var boughtList = this;

        boughtList.items = ShoppingListService.getBoughtItems();
    }

    function ShoppingListService(){
        var service = this;

        var toBuyItems = [
                {
                    name : "Palit GeForce GTX 1060",
                    quantity : 1
                },
                {
                    name : "Intel i5-6500",
                    quantity : 1
                },
                {
                    name : "Asus B150M-A/M.2 Micro",
                    quantity : 1
                },
                {
                    name : "Team Dark 8GB DDR4-2400",
                    quantity: 2
                },
                {
                    name : "Mushkin ECO3 480GB 2.5 SSD",
                    quantity: 1
                },
                {
                    name : "Phanteks ECLIPSE P400S ATX Case",
                    quantity: 1
                },
                {
                    name : "SeaSonic 520W 80+",
                    quantity: 1
                }
        ];

        var boughtItems = [];

        service.buyItem = function(itemIndex){
            boughtItems.push(toBuyItems[itemIndex]);
            console.log(boughtItems);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function(){
            return toBuyItems;
        };

        service.getBoughtItems = function(){
            return boughtItems;
        }

    }
})();
