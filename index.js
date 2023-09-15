document.getElementById("formSubmit").style.color = "white";
document.getElementById("formSubmit").style.background = "red";

function changeText(){
  document.getElementById("detail").innerHTML = "Mouse Over Active"
}
function textBack(){
  document.getElementById("detail").innerHTML = "Sample Text one"
}
document.getElementById("box").addEventListener("click",function(){
  this.style.background = "red";
})