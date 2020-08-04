window.onscroll = function() {stickyNav()};

let navBar = document.querySelector(".navbar__list");
let navLogo = document.querySelector(".navbar__item--logo");
let nav = document.querySelector(".navbar")
let sticky = navBar.offsetTop;

console.log(navBar);
console.log(navLogo);


function stickyNav() {
    if (window.pageYOffset >= sticky) {
      nav.classList.add("stick")
      nav.classList.add("navbar")
      navBar.classList.add("list__stick")
      navLogo.style.display = "block";
    } else {
      nav.classList.remove("stick")
      navBar.classList.remove("list__stick");
      navLogo.style.display = "none";
    }
  }

console.log('killing')