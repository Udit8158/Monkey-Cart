import { productRow } from "./html-elements.js";
import { productData } from "./product-data.js";

// const url = `https://fakestoreapi.com/products`;

export const showProducts = () => {
  // firsof all making the product row's html blank
  productRow.innerHTML = "";
  productData.forEach((product) => {
    productRow.innerHTML += `
      <div class="product-item">
      <img src=${product.image} alt="demo-product" />
      <h2>${product.title}</h2>
      <p>
      ${product.description.slice(0, 100)}
      </p>
      <div class="row">
      <span class="price">Price: ${product.price}$</span>
      <button class="add-to-cart-btn" onclick="addToCart()">Add To Cart</button>
      </div>
      </div>
          `;
  });
};
