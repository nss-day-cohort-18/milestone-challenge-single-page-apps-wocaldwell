"use strict";

var CarLot = (function() {
    var inventory = [];

    return {
        loadInventory: function(callback) {
            var inventoryLoader = new XMLHttpRequest();
            inventoryLoader.open("GET", "inventory.json");
            inventoryLoader.send();
            inventoryLoader.addEventListener("error", function(event) {
                console.log("There was an error loading");
            });
            inventoryLoader.addEventListener("load", function(event) {
                var carsData = JSON.parse(event.target.responseText);
                var carArray = carsData.cars;
                for (var i in carArray) {
                    inventory.push(carArray[i]);
                }
                callback(carArray);
            });
        },
        getInventory: function() {

        }
    };

})();