const addToCart = () => {
  console.log("click");
};
const clickMe = () => {
  console.log("Hey");
};
// Import Nav section
import { openMenu, closeMenu } from "./modules/responsive-navbar.js";
import { showProducts } from "./modules/show-products.js";
import { catagorySwitcher } from "./modules/catagory-swticher.js";

const apiUrl = "https://fakestoreapi.com/products";

// Controlling responsive navbar.
openMenu();
closeMenu();

// products showing and catagory switching
showProducts(apiUrl);
catagorySwitcher();
