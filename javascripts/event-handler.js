"use strict";

var CarLot = (function (eventHandler) {
    eventHandler.activateEvents = function() {
        var carInfoCards = document.getElementsByClassName("car-card");
        for (var i = 0; i < carInfoCards.length; i++) {
            carInfoCards[i].addEventListener("click", CarLot.changeOnClick);
        }
    };
    return eventHandler;
})(CarLot || {});