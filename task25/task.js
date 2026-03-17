let password=document.getElementById("password")

let checkbox=document.getElementById("toggle")


checkbox.addEventListener('change', function() {

  if (checkbox.checked) {
    password.type ="text"; 
  } else {
    password.type ="password";
  }
});
