"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

const html = /*html*/ `
  <h2>Welcome to the App</h2>
  <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png" class="product-image" />
  <p>This is a simple application initialized on DOMContentLoaded event.</p>
  <section></section>
  <p></p>
`;
