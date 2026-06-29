function getText(){
    let resp = document.getElementById("heading");
    console.log(resp);
    console.log(resp.innerText);
}
   
function changeText (){
         //document.getElementByID("heading").innerText="heading <span style ='color:red' change</span";
         document.getElementById ("heading").innerHTML="heading <span style= 'color:red'> change</span>";
       }
 function changeBgtext(){
    //inner css
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
 }      
 //add class
 let flag = 0;
 function changemode(){
    if (!flag){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        flag=1;
    }
    else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        flag=0;
    }
 }