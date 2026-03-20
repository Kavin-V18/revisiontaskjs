let mainInput = document.getElementById("otp");

let boxes = document.querySelectorAll("#boxes input");

mainInput.addEventListener("input", () => {
let value = mainInput.value;
boxes.forEach((box, i) => {
box.value = value[i] || "";

});
});