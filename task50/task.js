
let page = 1;

let users=document.getElementById("users")

// Load data from API
function load(){
fetch("https://reqres.in/api/users?page=" + page)
.then(res => res.json())
.then(data => {

users.innerHTML = "";

data.data.forEach(user => {

users.innerHTML += user.first_name + "<br>";
});
});
}
// Next page
function next(){
page++;
load();
}
// Previous page
function prev(){
if(page > 1){
page--;
load();
}
}

// Initial load

load();
