let inputvalue=document.getElementById("inputfield")
let error=document.getElementById("errordiv")
let button=document.getElementById("checkbtn")
let result=document.getElementById("result")

button.addEventListener("click",function(){
      
      let values=inputvalue.value.trim()

             if(values===""){
                 error.innerHTML="enter a word"
                 return
             } 
             console.log(values)
              if(/\d/.test(values)) 
                {
                 error.innerHTML="numbers not allowed"
                return
            }
            if(/[^\w\s]/.test(values)){
                   error.innerHTML="special characters not  allowed"
                   return
            }

                 let temp=values
                   
                 let array=values.split("").reverse("").join("")
                

                  if(temp.toLowerCase()===array.toLowerCase()){
                     result.innerHTML=`this is pallindrome`
                  }
                  else{
                       result.innerHTML=`this is not a pallindrome`
                  }
       
})