import { catagories } from "./html-elements.js";
import { showProducts } from "./show-products.js";

let apiUrl = "";
export const catagorySwitcher = () => {
  catagories.forEach((e) => {
    e.addEventListener("click", () => {
      // changing the api url and then call the showproduct which is actually fetching data from the url
      apiUrl = `https://fakestoreapi.com/products/category/${e.id}`;
      showProducts(apiUrl);
    });
  });
};
