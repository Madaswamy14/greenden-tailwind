// Selecting Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuIcon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",() =>{
    sidenav.style.right=0
})

closenav.addEventListener("click", () =>{
    sidenav.style.right="-50%"
})