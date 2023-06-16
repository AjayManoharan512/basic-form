let fname=document.getElementById("name").value
console.log(fname);
let email=document.getElementById("email").value
let country=document.getElementById("country").value
console.log(country)
let gender=document.querySelector('input[name="gender"]:checked').value
console.log(gender)
let hobbies=[];
let checkboxes=document.getElementsByName('hobbies[]')
for(i=0;i<checkboxes.length;i++){
    if(checkboxes[i].checked){
        hobbies.push(checkboxes[i].value)
    }
}
console.log(hobbies)
let colr=document.getElementById("email")
colr.onfocus=function(){
    colr.style.backgroundColor='yellow'
}
colr.onblur=function(){
    colr.style.backgroundColor='white'
}
let h1=document.getElementById("h11")
h1.onmouseover=function(){
    h1.style.color='violet'
}
h1.onmouseout=function(){
    h1.style.color='black'
}

let sub=document.getElementById("sbtn")
function display(){
    alert("you clicked the submit button")
}
sub.addEventListener('click',display)

let orgname=document.getElementById("name")
orgname.addEventListener("focus",function(){
    orgname.style.backgroundColor='orange'
})
orgname.addEventListener("blur",function(){
    orgname.style.backgroundColor="white"
})



