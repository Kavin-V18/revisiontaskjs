

  function debounceFunction(callback,delay){
      
          return function(){
              let timer;
                 clearTimeout(timer)
                 timer=setTimeout(()=>{
                      callback()
                 },delay)
          }
  } 
  let countries=["india","indonesia","indigo","newzeland","southafrica"]

     let result=document.getElementById("result")

          function  suggestFunction(){
                 
                let value=document.getElementById("inputField").value
            
               let output=countries.filter(data=> data.includes(value))
                result.innerHTML=output
          }
          function myFunction()
          {
            let func= debounceFunction(suggestFunction,2000)
            func()
            }