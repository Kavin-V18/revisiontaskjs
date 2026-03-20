
let fullname=document.getElementById("name")
let email=document.getElementById("email")
let message=document.getElementById("message")


fullname.addEventListener("input",function(){
       
    let name=localStorage.setItem("fullname",fullname.value)
})
email.addEventListener("input",function(){
       
    let emailid=localStorage.setItem("fullname",email.value)
})
message.addEventListener("input",function(){
       
    let messages=localStorage.setItem("fullname",message.value)
})

