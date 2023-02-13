let result = document.querySelector("#content");
let content = document.querySelector("input[type=text]");
let submit = document.querySelector("input[type=submit]");
let word = ["VOITURE", "FRUIT", "JEU", "NATURE"];
let createSpan = null;

function check(e) {
    e.preventDefault();
    if (content.value.length < 2) {
         
    } else {
         console.log("...");
    }
    console.log(content.value.length)
}

function randomize(tab) {
    let i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}

let game = randomize(word);
let resultEnd = game[0];

function selectWord() {
    for (let i = 0; i > resultEnd.length; i++) {
        createSpan = document.createElement("span");
        result.appendChild(createSpan);
        console.log(createSpan);
    }
}

console.log(resultEnd.length);
selectWord();
submit.addEventListener("click", check);