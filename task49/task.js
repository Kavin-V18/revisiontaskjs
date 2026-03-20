let data=Array.from({length:50},(_,i)=>"Item "+(i+1));
let page=0;

function render(){
list.innerHTML="";
let start=page*10;

data.slice(start,start+10)
.forEach(i=>list.innerHTML+=i+"<br>");

}

function next()
{ 
    page++; render();

 }
function prev()
{
     if(page>0) page--; 
     render();

 }



render();

prev()