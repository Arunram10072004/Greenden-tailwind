var menubar = document.getElementById("menubar")

var sectionnav = document.getElementById("sectionnav")
var closeicon = document.getElementById("closeicon")

menubar.addEventListener("click", function () {
    sectionnav.style.right = "0"

})

closeicon.addEventListener("click", function () {
    sectionnav.style.right = "-50%"
})

var search = document.getElementById("search")
var container = document.getElementById("container")
var productlist = container.querySelectorAll("div")

search.addEventListener("keyup", function(event) {
    var entervalue = event.target.value.toUpperCase()


    for (count = 0; count < productlist.length; count < count++) {

        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(entervalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})