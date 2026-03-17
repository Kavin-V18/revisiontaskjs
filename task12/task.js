let result=document.getElementById("result")

function myFunction(){
      
       let   myurl=new URL("http://www.mitrahsoft.com/?technology=coldfusion&people=veryNice")

          let technology=myurl.searchParams.get("technology")
          let people=myurl.searchParams.get("people")
          

            result.innerText=`Technology: ${technology}
             People : ${people}`
}