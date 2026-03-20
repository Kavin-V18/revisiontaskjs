

let modalDiv = document.getElementById("loginModal");
let openButton = document.getElementById("openButton");
let closeButton = document.getElementsByClassName("closeButton")[0];
let loginDetails = document.getElementById("loginDetails");

modalDiv.style.display = "none";

openButton.onclick = function () {

    modalDiv.style.display = "block";
}
closeButton.onclick = function () {

    modalDiv.style.display = "none";
}
window.onclick = function (event) {

    if (event.target == modalDiv) {
        modalDiv.style.display = "none";
    }
}
loginDetails.addEventListener("submit", function (event) {

    event.preventDefault();
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;
    console.log("Email:", email);

    console.log("Password:", password);
})