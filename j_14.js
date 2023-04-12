const inputEl=document.querySelector('.input');
const bodyEl=document.querySelector("body");
const labelEl=document.querySelector(".label");
const circleEl=document.querySelector(".circle");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor="black";
        labelEl.style.backgroundColor="white";
        circleEl.style.backgroundColor="black";
    }
    else{
        bodyEl.style.backgroundColor="white";
        labelEl.style.backgroundColor="black";
        circleEl.style.backgroundColor="white"; 
       
    }
}  
updateBody();
inputEl.addEventListener("input", ()=>{
    console.log(inputEl.checked);
    updateBody();
    updateLocalStorage();  
})
function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked)
    );
}