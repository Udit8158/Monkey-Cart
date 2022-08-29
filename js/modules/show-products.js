import { productRow } from "./html-elements.js";

// const url = `https://fakestoreapi.com/products`;

export const showProducts = (url) => {
  // fetch from api url
  fetch(url)
    .then((res) => res.json())
    .then((products) => {
      //   console.log(products);

      // firsof all making the product row's html blank
      productRow.innerHTML = "";
      products.forEach((product) => {
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
    });
};
