let decreasebtn=document.getElementById("decbtn");
let disPlaynumber= document.getElementById("num");
let increasebtn = document.getElementById("incbtn");
let resetbutton =  document.getElementById("resetbtn");

decreasebtn.addEventListener("click", ()=> {
    const value= Number(disPlaynumber.innerText);
    if(value>0){
        disPlaynumber.innerText= value-1;
    }
    else{
        alert("Negative value not allowed ");
    }
});

increasebtn.addEventListener("click", ()=>{
    const value = Number(disPlaynumber.innerText);
    disPlaynumber.innerText= value+1;
});


resetbutton.addEventListener("click", ()=>{
    disPlaynumber.innerText=0;
});

