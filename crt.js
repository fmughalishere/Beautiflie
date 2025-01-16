// Handle adding products to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = {
            id: this.getAttribute('data-id'),
            name: this.getAttribute('data-name'),
            price: parseFloat(this.getAttribute('data-price'))
        };

        // Add product to cart in localStorage
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart count
        updateCartCount();
    });
});
