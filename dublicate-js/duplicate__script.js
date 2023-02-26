// Burger menu
let menuBtn = document.querySelector(".header__menu-btn");
let menu = document.querySelector(".header__menu");
menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
});




// DropdownMenu
function documentActions(event) {
    const targetElement = event.target
    if (
        targetElement.classList.contains("menu__arrow") || targetElement.classList.contains("navbar-list__link") || targetElement.classList.contains("navbar-list__item"))
        {
        targetElement.closest(".navbar-list__item").classList.toggle("hover")
    }
    if(
        !targetElement.closest(".navbar-list__item") &&
        document.querySelectorAll(".navbar-list__item.hover").length > 0)
        {
        document
            .querySelectorAll(".navbar-list__item.hover")
            .forEach((item) => {
                item.classList.remove("hover")
            })
    }
}

document.addEventListener("click", documentActions)

AOS.init();
AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate', 
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99, 
  

  offset: 120,
  delay: 0,
  duration: 400, 
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom',

});
