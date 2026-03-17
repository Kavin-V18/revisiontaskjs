let inputvalues=document.getElementById("inputfield")
let error=document.getElementById("errormsg")
let button=document.getElementById("removebtn")
let result=document.getElementById("resultdiv")

button.addEventListener("click",function(){
           error.innerHTML=""
           result.innerHTML=""

           let inputdata=inputvalues.value.trim()
          
            if(inputdata===""){
                 error.innerHTML="empty input not allowed"
                 return
            }
           
            console.log(inputdata.length)

            let cleanedinput=inputdata.replace(/[,]+/g,",")

            console.log(cleanedinput)


           let arrvalues=cleanedinput.split(",")

            if(arrvalues.length<=1){
                error.innerHTML="single element not allowed"
                return
            }

           let removeduplicate=[...new Set(arrvalues)] 
           console.log(removeduplicate)

           result.innerHTML=`${removeduplicate}`



})