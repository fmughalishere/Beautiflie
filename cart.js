// Check if there are any cart items stored in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in the navigation bar
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Display the cart items in cart.html
function displayCartItems() {
    const cartContent = document.getElementById('cart-content');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartContent.innerHTML = ''; // Clear existing cart items

    if (cart.length === 0) {
        cartContent.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button class="remove-item" data-id="${item.id}">Remove</button>
            `;
            cartContent.appendChild(cartItem);
            totalPrice += item.price;
        });
    }

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Remove an item from the cart
function removeItemFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCartItems();
}

// Add event listeners to the remove buttons
document.getElementById('cart-content').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('remove-item')) {
        const itemId = e.target.getAttribute('data-id');
        removeItemFromCart(itemId);
    }
});

// Initialize the cart page
updateCartCount();
displayCartItems();
