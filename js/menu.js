var link = document.querySelector(".menu__enter");
var menu = document.querySelector(".menu__list");

link.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("menu__list--show");
    link.classList.toggle("menu__enter--show");
    link.classList.toggle("menu__enter--close");
})
