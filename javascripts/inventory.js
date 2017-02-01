"use strict";

var CarLot = (function(inventoryMaker) {
    //=============VARIABLES=============//
    // variable that will store each card
    var carCard = "";
    // variable for div that will contain the cards
    var inventoryContainer = document.getElementById("inventory-container");
    //=============FUNCTIONS=============//
    inventoryMaker.loadInventory = function() {
        var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.addEventListener("load", function(event) {
        var carsData = JSON.parse(event.target.responseText);
        inventoryMaker.printCards(carsData);
        });
        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();
    };
    inventoryMaker.printCards = function(carsData) {
        var carArray = carsData.cars;
        for (var i = 0; i < carArray.length; i++) {
            var cardItem = carArray[i];
            carCard += `<div class="car-card black-border">
                            <h4>${cardItem.year} ${cardItem.make} ${cardItem.model}</h4>
                            <p>${cardItem.description}</p>
                            <h3>$${cardItem.price}</h3>
                        </div>`;
            inventoryContainer.innerHTML += carCard;
            carCard = "";
            console.log(inventoryContainer.innerHTML);
        }
    };
    return inventoryMaker;
})(CarLot || {});