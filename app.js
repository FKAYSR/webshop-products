//#region

// "use strict";

// // ===== APP INITIALISERING =====
// // Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
// document.addEventListener("DOMContentLoaded", initApp);

// // Initialize the app - sæt event listeners og hent data
// function initApp() {
//   console.log("App initialized");
// }

// console.log("Vi tester console.log og det er ret nørdet ✨");

// console.log(42);
// console.log(23 + 26);
// console.log("Jeg er 22 år");

// const productTitle = "Fjallraven - Foldsack No. 1 Backpack";
// const productPrice = 849;
// const inStock = true;
// console.log(productTitle);
// console.log(productPrice);
// console.log(inStock);

// if (inStock){
//   const testSection = document.querySelector("#test");
//   const html = `
//     <div>
//       <h3>Test: Produkt information</h3>
//       <p><strong>Titel:</strong> ${productTitle}</p>
//       <p><strong>Pris:</strong> ${productPrice} kr</p>
//       <p><strong>På lager:</strong> ${inStock}</p>
//     </div>
//   `;
//   testSection.insertAdjacentHTML("beforeend", html);
// }

// const productTitle2 = "Mens Casual Premium Slim Fit T-Shirts";
// const productPrice2 = 179;
// const inStock2 = true;
// console.log(productTitle2);
// console.log(productPrice2);
// console.log(inStock2);

// if (inStock2){
//   const testSection2 = document.querySelector("#test");
//   const html2 = `
//     <div>
//       <h3>Produkt information</h3>
//       <p><strong>Titel:</strong> ${productTitle2}</p>
//       <p><strong>Pris:</strong>${productPrice2}</p>
//       <p><strong>På lager:</strong> ${inStock2}</p>
//     </div>
//   `;
//   testSection2.insertAdjacentHTML("beforeend", html2);
// }

// if (inStock) {
//   console.log(`${productTitle} er på lager!`);
// } else {
//   console.log(`${productTitle} er desværre ikke på lager!`);
// }

// if (productPrice > productPrice2) {
//   console.log(`${productTitle} er dyrest og koster ${productPrice} kr`);
// } else {
//   console.log(`${productTitle2} er dyrest og koster ${productPrice2} kr`);
// }

// if (productPrice > productPrice2) {

// }
//#endregion

// Event listener - starter appen når siden er loaded
document.addEventListener("DOMContentLoaded", initApp);

// Data - produkter
import {products} from "./data.js";
import {getExcerpt, getStockStatus} from "./helpers.js";

// Initialize app
function initApp() {
  console.log("App initialized");
  displayAllProducts();
}

// Vis alle produkter
function displayAllProducts() {
  // ryd grid
  document.querySelector("#productGrid").innerHTML = "";
  // loop gennem products
  for (const product of products) {
    // kald displayProduct for hvert produkt
    displayProduct(product);
  }
}

// Vis ét produkt
function displayProduct(product) {
  // tjek lagerstatus
  let stockText; // tekst til lagerstatus
  let stockClass; // CSS-klasse til lagerstatus
  if (product.inStock) {
    // hvis produktet er på lager
    stockText = "På lager";
    stockClass = "in-stock";
  } else {
    // hvis produktet er udsolgt
    stockText = "Udsolgt";
    stockClass = "out-of-stock";
  }

  const stock = getStockStatus(product.inStock);

  // lav HTML
  const html = /*html*/ `
  <article class="product-card">
    <img src="${product.image}" class="product-image" />
    <div class="product-info">
      <h2 class="product-title">${product.title}</h2>
      <p class="product-description">
        ${//getExcerpt
        product.description}
      </p>
      <p class="product-price">$${product.price}</p>
      <span class="product-stock ${stockClass}">${stockText}</span>
    </div>
  </article>
  `;
  // indsæt i DOM
  document.querySelector("#productGrid").insertAdjacentHTML("beforeend", html);
}

const testProduct = products[0];
getExcerpt(testProduct.description);
console.log(testProduct);
console.log(testProduct.description.substring(0, 60));

const excerpt = testProduct.description.substring(0, 60);
console.log(excerpt);

// Traditionel
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// Arrow function
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 3));

// Traditionel
function square(x) {
  return x * x;
}
console.log(square(4));

// Arrow function (kort syntaks)
const squareArrow = x => x * x; // Parenteser kan droppes ved ét parameter
console.log(squareArrow(4));
