

// script.js
let inputs = document.getElementById("inputs");

inputs.addEventListener("input", function (e) {
    let target = e.target;
    let number = target.value;

    if (isNaN(number)) {
        target.value = "";
        return;
    }

    if (number != "") {
        let next = target.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
});

inputs.addEventListener("keyup", function (e) {
    let target = e.target;
    let key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
        target.value = "";
        let previous = target.previousElementSibling;
        if (previous) {
            previous.focus();
        }
        return;
    }
});