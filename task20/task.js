let minInput=document.getElementById("inputMin")
let maxInput=document.getElementById("inputMax")
let error=document.getElementById("errorDiv")
let button=document.getElementById("button")
let result=document.getElementById("resultDiv")

   button.addEventListener("click",function(){
        
        let minValue=minInput.value.trim()
        let maxValue=maxInput.value.trim()

        if(minValue==="" || maxValue===""){
              error.innerHTML="empty fields not allowed"
              return
        }
         if(!/^\d+$/.test(minValue) || !/^\d+$/.test(maxValue)){
              error.innerHTML="only numbers allowed"
              return
        }
             
           if(Number(minValue)>Number(maxValue)){
                error.innerHTML="max must be greater than min"
                return
           }

           function getRandomNumber(min, max) {
  return Math.random() * (max - min);
}
let randomNumber = getRandomNumber(Number(minValue), Number(maxValue));

     result.innerHTML=` random number : ${Math.floor(randomNumber)}`
   })