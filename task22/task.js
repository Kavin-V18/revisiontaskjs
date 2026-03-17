let input=document.getElementById("inputField")
let error=document.getElementById("errorDiv")
let indicator=document.getElementById("indicator")

input.addEventListener("keyup",function(){
     
        let password=input.value.trim()
           let strength=0;
        if(password.length<8){
             error.innerHTML="password must contain minimum 8 characters"
             return
        }
        else{
             strength+=20
        }
         if(strength<40){
             indicator.innerHTML="weak"
        }
        if(!/[A-Z]/.test(password)){
             error.innerHTML="password must contain atleast one uppercase character"
             return
        }
         else{
             strength+=20
        }
        if(!/[a-z]/.test(password)){
             error.innerHTML="password must contain atleast one lowercase character"
             return
        }
         else{
             strength+=20
        }
        if(strength>40 && strength<80){
             indicator.innerHTML="medium"
        }
        if(!/\d/.test(password)){
               error.innerHTML="password must contain atleast one number"
               return
        }
         else{
             strength+=20
        }
         if(!/\W/.test(password)){
              error.innerHTML="password must contain atleast one special character"
              return
         }
          else{
             strength+=20
        }
        error.innerHTML=""
        
        if(strength>80){
             indicator.innerHTML="strong"
        }

})