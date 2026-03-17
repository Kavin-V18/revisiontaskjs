let inputValue=document.getElementById("inputField")
let error=document.getElementById("errorDiv")
let button=document.getElementById("countButton")
let result=document.getElementById("resultDiv")

    button.addEventListener("click",function(){
          
           error.innerHTML=""
           result.innerHTML=""

           let inputData=inputValue.value.trim()

           if(inputData==="")
           {
            error.innerHTML="Empty sentence not allowed"
           }
              
               result.innerHTML=` characters count :${inputData.length}`


    })