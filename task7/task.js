let inputvalue=document.getElementById("inputfield")
let result=document.getElementById("outputarea")
let error=document.getElementById("errormsg")
let addbtn=document.getElementById("addbutton")
let mulbtn=document.getElementById("multiplybutton")


addbtn.addEventListener("click",function(){
       let value=inputvalue.value.trim()
    if(value===""){
         error.innerHTML="enter numeric values separated by commas"
         return
    }
       error.innerHTML=""
       result.innerHTML=""
         let arrnum=value.split(",")
       
         let output=arrnum.reduce((acc,curr)=>Number(acc)+Number(curr))

          result.innerHTML=`${output}`

        
})
mulbtn.addEventListener("click",function(){
     let value=inputvalue.value.trim()
      if(value===""){
         error.innerHTML="enter numeric values separated by commas"
         return
    }
     error.innerHTML=""
       result.innerHTML=""
         let arrnum=value.split(",")

           let output=arrnum.reduce((acc,curr)=>Number(acc)*Number(curr),1)
            result.innerHTML=`${output}`
})