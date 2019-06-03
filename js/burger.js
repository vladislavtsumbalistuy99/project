var burgerBtn = document.getElementById("burger");
var sandwichSidebar = document.getElementById("sandwich-sidebar");
var index = false;

burgerBtn.addEventListener("click",
function showBurger(e){
  
  if (index == false){
    sandwichSidebar.style.left = "0px";
    index = true;
  } else if (index == true){
    sandwichSidebar.style.left = "-200px";
    index = false;
  }

  e.preventDefault();
})