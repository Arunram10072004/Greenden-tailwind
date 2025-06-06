var menubar =document.getElementById("menubar")

var sectionnav =document.getElementById("sectionnav")
var closeicon =document.getElementById("closeicon")

menubar.addEventListener("click",function(){
    sectionnav.style.right="0"

})

closeicon.addEventListener("click",function(){
    sectionnav.style.right="-50%"
})