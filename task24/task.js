let input=document.getElementById("inputField")
let result=document.getElementById("message")

async function copyText(){
    
       let text=input.value.trim()
       try{
            await navigator.clipboard.writeText(text)
            result.innerHTML="Text Copied to clipboard"
       }
       catch(err){
          console.error(err)
       }
}