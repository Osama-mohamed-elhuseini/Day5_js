var inputs=document.querySelectorAll("form input");
var btnAdd=document.querySelector("[value='ADD']");
var btnDel=document.querySelector("[value='DELETE']");
var table=document.querySelector(".showData");
var selection=document.querySelector("select");
// var div=document.createElement("div");
var btnDelall=document.querySelector("[value='DELETE ALL']");

var values=[];

inputs[0].addEventListener("keyup",(e)=>{
if(!isNaN(e.currentTarget.value)){
    e.currentTarget.value="";
    alert("Please enter a valid name");
}
else{

    values[0]=e.currentTarget.value;
}
});

inputs[1].addEventListener("change",(e)=>{
    if(isNaN(e.currentTarget.value)){
        e.currentTarget.value="";
        alert("Please enter only Numbers");

    }
else if(  parseInt(e.currentTarget.value)>=60 || parseInt(e.currentTarget.value)<=18 ){
    e.currentTarget.value="";
    alert("Sorry the valid age is between 18 & 60");
}
values[1] = inputs[1].value;
    });


selection.addEventListener("click",(e)=>{
    values[2]=e.currentTarget.value;
});

values[3]="Delete";

btnAdd.addEventListener("click",() => {

table.appendChild(document.createElement("div"));
table.children[(table.childElementCount)-1].classList.add("newParent")
for(var x=0;x<3;x++){
table.children[(table.childElementCount)-1].append(document.createElement("div"));
table.children[(table.childElementCount)-1].children[x].textContent=values[x];
}
table.children[(table.childElementCount)-1].children[0].classList.add("FirstEl");

table.children[(table.childElementCount)-1].append(document.createElement("button"));
table.children[(table.childElementCount)-1].children[3].textContent=values[3];
table.children[(table.childElementCount)-1].children[3].classList.add("btn");

table.children[(table.childElementCount)-1].children[3].addEventListener("click",(e)=>{
    e.currentTarget.parentElement.style.display="none"

});

});


btnDel.addEventListener("click",()=>{
    table.children[(table.childElementCount)-1].style.display="none";
});


btnDelall.addEventListener("click",()=>{
    for(var v=1;v<table.childElementCount ;v++){
        table.children[v].style.display="none";
    }
});
