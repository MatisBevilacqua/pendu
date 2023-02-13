let result = document.querySelector("#content");
let content = document.querySelector("input[type=text]");
let submit = document.querySelector("input[type=submit]");

function check(e) {
    e.preventDefault();
    if (content.value.length < 2) {
         console.log("Ok");
    } else {
         console.log("...");
    }
    console.log(content.value.length)
}

submit.addEventListener("click", check);