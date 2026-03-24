
let result=document.getElementById("result")

async function fetchData(){
let tries=0;
while(tries<3){
try{
result.innerText="Loading...";
let res=await fetch("https://wrong-api.com");
let data=await res.json();
result.innerText=JSON.stringify(data);
return;
}catch{
tries++;
result.innerText="Retrying...";
}
}
result.innerText="Failed after 3 attempts";
}
