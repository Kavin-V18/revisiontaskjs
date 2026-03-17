let inputEmail=document.getElementById("inputField")
let error=document.getElementById("errorDiv")
let button=document.getElementById("emailCheck")
let result=document.getElementById("resultDiv")

button.addEventListener("click",function(){
       error.innerHTML=""
       result.innerHTML=""
     let validEmail=inputEmail.value.trim() 

     if(validEmail===""){
           error.innerHTML="please enter email"
           return
     }
let domain = validEmail.split("@")[1];

   console.log(domain)
   if(domain===undefined){
        error.innerHTML="enter valid email"
        return
   }
   result.innerHTML=`${domain}`   
})