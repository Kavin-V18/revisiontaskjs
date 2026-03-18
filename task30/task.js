let inputValue=document.getElementById("inputField")
let button=document.getElementById("startButton")
let result=document.getElementById("resultDiv")

function timerFunction(){
       
          let inputNumber=Number(inputValue.value)
          
              let timer=setInterval(()=>{
                      if(inputNumber<0){
                            clearInterval(timer)
                      }
                      else{
                            result.innerHTML=`${inputNumber}`
                      }
                      inputNumber-=1
              },1000)  
}