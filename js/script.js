// Grab element
const menuIcon = document.querySelector(".menu-icon");
const smProductCatagories = document.querySelector(".sm-catagory-section");
const cartLogo = document.querySelector(".cart-logo");
const closeIcon = document.querySelector(".cancel-icon");

// Logic For Responsive Navbar
// Open Menu
menuIcon.addEventListener("click", () => {
  smProductCatagories.classList.remove("d-none");
  //   smProductCatagories.style.animationName = "openMenu";
  cartLogo.style.display = "block";
  menuIcon.style.display = "none";
});

// Close menu
closeIcon.addEventListener("click", () => {
  smProductCatagories.classList.add("d-none");
  //   smProductCatagories.style.animationName = "closeMenu";
  cartLogo.style.display = "none";
  menuIcon.style.display = "block";
});
