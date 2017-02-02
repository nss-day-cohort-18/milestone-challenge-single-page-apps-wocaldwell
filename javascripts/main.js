"use strict";

// variable that will store each card
var carCard = "";
// variable for div that will contain the cards
var inventoryContainersContainer = document.getElementById("inventory-containers-container");

function populatePage (inventory) {
    var containerNum = 1;
    inventoryContainersContainer.innerHTML += `<div id="inventory-container${containerNum}" class="container" ></div>`;
    var inventoryRow = document.getElementById(`inventory-container${containerNum}`);
    // Loop over the inventory and populate the page
    for (var i in inventory) {
        var cardItem = inventory[i];
        carCard += `<div class="car-card black-border col-xs-3">
                        <h4>${cardItem.year} ${cardItem.make} ${cardItem.model}</h4>
                        <p class="car-description">${cardItem.description}</p>
                        <h3>$${cardItem.price}</h3>
                    </div>`;
        inventoryRow.innerHTML += carCard;
        if (inventoryRow.childNodes.length % 3 === 0) {
            containerNum += 1;
            inventoryContainersContainer.innerHTML += `<div id="inventory-container${containerNum}" class="container" ></div>`;
            inventoryRow = document.getElementById(`inventory-container${containerNum}`);
        }
        carCard = "";
    }
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);