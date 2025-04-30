document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

async function fetchProducts() {
    try {
        const response = await fetch('http://127.0.0.1:5000/getProducts');
        const data = await response.json();
        
        const productContainer = document.querySelector(".product-container");
        productContainer.innerHTML = ""; // Clear previous dummy products

        data.forEach(product => {
            const productBox = document.createElement('div');
            productBox.classList.add('product-box');

            productBox.innerHTML = `
                <img alt="${product.name}" src="images/${getImageName(product.name)}">
                <strong>${product.name}</strong>
                <span class="quantity">${product.quantity_per_unit}</span>
                <span class="price">Rs. ${product.price_per_unit}</span>
                <a href="#" class="cart-btn"><i class="fas fa-shopping-bag"></i> Add to Cart</a>
                <a class="like-btn"><i class="far fa-heart"></i></a>
            `;
            
            productContainer.appendChild(productBox);
        });

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function getImageName(productName) {
    // Map product names to image filenames if needed
    const mapping = {
        "Apple": "apple.png",
        "Onion": "onion.png",
        "Potato": "patato.png",
        "Chili": "chili.png",
        "Garlic": "garlic.png",
        "Tomato": "tamato.png",
    };
    return mapping[productName] || "default.png"; // Fallback
}
