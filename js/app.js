// Import Nav section
import { openMenu, closeMenu } from "./modules/responsive-navbar.js";
import { showProducts } from "./modules/show-products.js";
import { catagorySwitcher } from "./modules/catagory-swticher.js";
import { addToCartBtn } from "./modules/html-elements.js";

// const apiUrl = "https://fakestoreapi.com/products";

// Controlling responsive navbar.
openMenu();
closeMenu();

// products showing and catagory switching
showProducts();
catagorySwitcher();

console.log(addToCartBtn);
