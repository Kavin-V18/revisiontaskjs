let result=document.getElementById("result")
  function debounceFunction(callback,delay){
        let timer;
          return function(...args){
                 clearTimeout(timer)
                 timer=setTimeout(()=>{
                      callback.apply(this,args)
                 },delay)
          }
  }  
 async function searchfetch(query){

         let fetchurl=await fetch(`https://api.github.com/search/users?q=${query}`).then(res=>{return res.json()}).then(res=>{return res.items})
          
           let names=fetchurl.map(data=>{ return data.login})
             let output=  names.filter(values=> values.includes(query))

           result.innerHTML=`${output}`
     }
  function myFunction(){
     let inputValue=document.getElementById("inputField")
         let timerFunc=debounceFunction(searchfetch,2500)
         timerFunc(inputValue.value)
  }
   
