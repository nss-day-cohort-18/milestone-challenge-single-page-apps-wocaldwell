"use strict";

var CarLot = (function (cardChanger) {
    cardChanger.changeOnClick = function() {
        var allCards = document.getElementsByClassName("car-card");
        var clickedCard = event.currentTarget;
        for (var i = 0; i < allCards.length; i++) {
            borderChanger(i, allCards, clickedCard);
        }
        backgroundChanger(clickedCard, "pink");
        editDescription(clickedCard);
    };
    function borderChanger(i, allCards, clickedCard) {
        if (allCards[i] === clickedCard) {
            allCards[i].classList.add("big-border");
        } if (allCards[i] !== clickedCard && allCards[i].classList.contains("big-border")) {
            allCards[i].classList.remove("big-border");
        }
    }
    function backgroundChanger(car, color) {
        var allCards = document.getElementsByClassName("car-card");
        for (var i = 0; i < allCards.length; i++) {
            if (allCards[i] === car) {
            allCards[i].classList.add(color);
            } if (allCards[i] !== car && allCards[i].classList.contains(color)) {
                allCards[i].classList.remove(color);
            }
        }
    }
    function editDescription(clickedCard) {
        var editorBox = document.getElementById("editor");
        editorBox.focus();
        editorBox.value = "";
        editorBox.addEventListener("keyup", function() {
            if (clickedCard.classList.contains("pink")) {
                clickedCard.childNodes[3].innerHTML = editorBox.value;
            }
        });
    }
    return cardChanger;
})(CarLot || {});