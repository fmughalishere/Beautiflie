// Example list of products (could be fetched from a database or API)
const products = [
    { name: 'Lipstick', price: 19.99, img: 'n7.jpg' },
    { name: 'Cleanser', price: 24.99, img: 'n9.jpg' },
    { name: 'Face Powder', price: 15.99, img: 'n10.jpg' },
    { name: 'Nails', price: 12.99, img: 'n3.jpg' },
    { name: 'Eye Lashes', price: 18.99, img: 'n5.jpg' },
    { name: 'Nail Polish', price: 8.99, img: 'n6.jpg' }
];

// Array to store recent search history
let searchHistory = [];

// Function to display products
function displayProducts(productsArray, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = ''; // Clear previous content

    productsArray.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        `;
        container.appendChild(productDiv);
    });
}

// Function to filter products based on search query
function searchProducts(query) {
    // Filter products based on the search query (case insensitive)
    return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
}

// Handle the search bar input event
document.getElementById('search-bar').addEventListener('input', (event) =>{
    const query = event.target.value;

    // Store recent search history
    if (query && !searchHistory.includes(query)) {
        searchHistory.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory)); // Store in localStorage
    }

    // Search and display the results
    const searchResults = searchProducts(query);
    displayProducts(searchResults, 'search-list');

    // Display recommended products (this could be based on search history or popular products)
    if (searchHistory.length > 0) {
        const recommendedResults = searchHistory.slice(-5); // Show last 5 searches as recommendations
        displayRecommendedProducts(recommendedResults);
    }
});
// Function to display recommended products
function displayRecommendedProducts(history) {
    const recommendedContainer = document.getElementById('recommended-list');
    recommendedContainer.innerHTML = ''; // Clear previous recommendations

    history.forEach(query => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('recommended-item');
        historyItem.innerHTML = `
            <p>Suggested for you: <strong>${query}</strong></p>
        `;
        recommendedContainer.appendChild(historyItem);
    });
}

// Display recommended products on page load (based on search history)
const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
displayRecommendedProducts(storedHistory);
