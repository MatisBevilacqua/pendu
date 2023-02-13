let result = document.querySelector("#content");
let content = document.querySelector("input[type=text]");
let submit = document.querySelector("input[type=submit]");

function check(e) {
    e.preventDeefault();
    if (content.value > 1) {
        console.log("Ok");
    } else {
        console.log("...");
    }
}

addEventListener("click", check);