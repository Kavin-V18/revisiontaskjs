
window.onload = function(){
document.getElementById("name").value = localStorage.getItem("name") || "";
document.getElementById("email").value = localStorage.getItem("email") || "";
document.getElementById("msg").value = localStorage.getItem("msg") || "";
};
document.getElementById("name").oninput = function(){
localStorage.setItem("name", this.value);
};
document.getElementById("email").oninput = function(){
localStorage.setItem("email", this.value);
};
document.getElementById("msg").oninput = function(){
localStorage.setItem("msg", this.value);
};  


