let inputValue=document.getElementById("inputField")
let error=document.getElementById("errorDiv")
let button=document.getElementById("checkButton")
let result=document.getElementById("resultDiv")

button.addEventListener("click",function(){
      error.innerHTML=""
      result.innerHTML=""

          let inputData=inputValue.value.trim()
           
           if(inputData==="")
           {
               error.innerHTML="empty input not allowed"
               return
           }
           if(!/^\d+$/.test(inputData))
           {
              error.innerHTML="only numbers allowed"
              return
           }
           if(/[^\w\s]/.test(inputData)){
               error.innerHTML="special characters not allowed"
           }

           if(Number(inputData%2===0))
           {
               result.innerHTML=" Is Even Number "
           }
           else{
              result.innerHTML=" Is Odd Number "
           }
})