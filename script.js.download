
// JavaScript for the E-Commerce app to handle cart logic
let cart = [];
const cartCount = document.getElementById("cart-count");

function updateCart() {
    cartCount.textContent = cart.length;
}

// Add item to cart
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = {
            id: button.getAttribute("data-id"),
            name: button.getAttribute("data-name"),
            price: parseFloat(button.getAttribute("data-price"))
        };

        cart.push(product);
        updateCart();
        alert(`${product.name} added to cart!`);
    });
});
