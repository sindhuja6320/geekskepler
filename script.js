// Initialize an empty cart
let cart = [];

// Function to update the cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length; // Update the cart count display
}

// Function to add a product to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product); // Add product to cart
    updateCartDisplay(); // Update cart display
    alert(`${productName} has been added to your cart!`); // Alert user
}

// Function to handle search functionality
function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block'; // Show product if it matches the search
        } else {
            product.style.display = 'none'; // Hide product if it doesn't match
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = button.parentElement; // Get the parent product div
            const productName = product.querySelector('h2').textContent; // Get product name
            const productPrice = product.querySelector('p').textContent; // Get product price
            addToCart(productName, productPrice); // Call addToCart function
        });
    });

    // Add event listener to search button
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', searchProducts);

    // Add event listener to search input for "Enter" key
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchProducts(); // Call searchProducts function on "Enter" key press
        }
    });
});