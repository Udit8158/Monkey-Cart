import {
  menuIcon,
  smProductCatagories,
  cartLogo,
  closeIcon,
} from "./html-elements.js";

// Logic For Responsive Navbar
// Open Menu
export const openMenu = () => {
  menuIcon.addEventListener("click", () => {
    smProductCatagories.classList.remove("d-none");
    //   smProductCatagories.style.animationName = "openMenu";
    cartLogo.style.display = "block";
    menuIcon.style.display = "none";
  });
};

// Close menu
export const closeMenu = () => {
  closeIcon.addEventListener("click", () => {
    smProductCatagories.classList.add("d-none");
    //   smProductCatagories.style.animationName = "closeMenu";
    cartLogo.style.display = "none";
    menuIcon.style.display = "block";
  });
};
