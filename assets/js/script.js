// affichage du mot à trouver
let result = document.querySelector("#content");
// saisie user
let content = document.querySelector("input[type=text]");
let submit = document.querySelector("input[type=submit]");
// liste de mots
let word = ["VOITURE", "FRUIT", "JEU", "NATURE", ""];
// nombre de lettres à afficher en tirets au début de la partie
let createSpan = null;
let userLetter;
// mélanger la liste de mots
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
// récupération du 1er mot après mélange de la liste
let resultEnd = game[0];
// affichage du nombre de lettres en tirets au début de la partie
function selectWord() {
    for (let i = 0; i < resultEnd.length; i++) {
        createSpan = document.createElement("span");
        result.appendChild(createSpan);
        console.log(createSpan);
    }
}
// partie principale du jeu :
// 1- vérifier que le user a saisi une seule lettre
// 1.2- si oui
// ---- 2.1- récupération de la lettre choisie => userLetter
// ---- 2.2- mot à trouver converti en tableau de lettres => wordSplit
// ---- 2.3- parcourir le tableau wordSplit pour voir si la lettre choisie existe
// 1.3- si non (à faire plus tard)
function check(e) {
    e.preventDefault();
    if (content.value.length < 2) { // 1.2
        userLetter = content.value; // 2.1
        let wordSplit = resultEnd.split(""); // 2.2
        console.log(wordSplit);
        let resultUser = wordSplit.includes(userLetter.toUpperCase()); // tu avais oublié le toUpperCase() et de déplacer la variable en dehors de la boucle
        console.log(resultUser);
            if (resultUser) {
                for (let j = 0; j < wordSplit.length; j++) { // 2.3
                        createSpan.setAttribute("class", "letter");
                        console.log("Ok");
                        let indice = [];
                        if (wordSplit[j] == resultUser) {
                            indice.push(j);
                            console.log(indice);
                        }
                }
            } else {
                console.log("Non")
            }
    } else { // 1.3
    }
    console.log(content.value.length)
}
console.log(resultEnd.length);
selectWord();
submit.addEventListener("click", check);
