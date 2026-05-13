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

//Product Search Functionality

const productContainer = document.getElementById("product-container")
const search = document.getElementById("search")
const productlist = productContainer.querySelectorAll("div")

    search.addEventListener("keyup", (event) =>{
        var enteredValue = event.target.value.toUpperCase()

        for(count = 0;count<productlist.length;count=count+1){

            var productname = productlist[count].querySelector("h1").textContent
            if(productname.toUpperCase().indexOf(enteredValue)<0)
            {productlist[count].style.display ="none"}
            else{
                productlist[count].style.display ="block"
            }
        }

    })
