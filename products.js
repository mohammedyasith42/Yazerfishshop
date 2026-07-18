const products = [
    {
        id: 'salmon',
        category: 'fish',
        name: 'Salmon Fish',
        price: 699,
        oldPrice: 999,
        weight: '500g',
        rating: 5,
        badge: 'Fresh',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fresh%20salmon%20fillet%20premium%20seafood&image_size=square_hd'
    },
    {
        id: 'prawns-large',
        category: 'prawns',
        name: 'Large Prawns',
        price: 549,
        oldPrice: 699,
        weight: '500g',
        rating: 4.8,
        badge: 'Bestseller',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fresh%20large%20prawns%20shrimp%20seafood&image_size=square_hd'
    },
    {
        id: 'pomfret',
        category: 'fish',
        name: 'Silver Pomfret',
        price: 899,
        oldPrice: 1199,
        weight: '500g',
        rating: 4.9,
        badge: 'Fresh',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fresh%20silver%20pomfret%20fish%20seafood&image_size=square_hd'
    },
    {
        id: 'chicken-curry',
        category: 'chicken',
        name: 'Chicken Curry Cut',
        price: 229,
        oldPrice: 299,
        weight: '1kg',
        rating: 4.7,
        badge: '',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fresh%20chicken%20curry%20cut%20pieces&image_size=square_hd'
    },
    {
        id: 'mutton-curry',
        category: 'mutton',
        name: 'Mutton Curry Cut',
        price: 749,
        oldPrice: 899,
        weight: '500g',
        rating: 4.6,
        badge: 'New',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fresh%20mutton%20curry%20cut%20pieces&image_size=square_hd'
    },
    {
        id: 'crab',
        category: 'crab',
        name: 'Live Mud Crab',
        price: 1299,
        oldPrice: 1599,
        weight: '1kg',
        rating: 4.9,
        badge: 'Premium',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fresh%20live%20mud%20crab%20seafood&image_size=square_hd'
    }
];

function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    container.innerHTML = products.map(product => `
        <div class="col-lg-4 col-md-6" data-aos="fade-up">
            <div class="product-card">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-actions">
                    <button onclick="toggleWishlist('${product.id}')"><i class="bi bi-heart"></i></button>
                    <button onclick="quickView('${product.id}')"><i class="bi bi-eye"></i></button>
                </div>
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <h5 class="mt-3">${product.name}</h5>
                <div class="stars mb-2">
                    ${'<i class="bi bi-star-fill"></i>'.repeat(Math.floor(product.rating))}
                    ${product.rating % 1 >= 0.5 ? '<i class="bi bi-star-half"></i>' : ''}
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <span class="product-price">₹${product.price} <span class="old-price">₹${product.oldPrice}</span></span>
                        <span class="text-muted">/ ${product.weight}</span>
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="addToCart('${product.id}', '${product.name}', ${product.price}, '${product.weight}')">
                        <i class="bi bi-cart3"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function quickView(productId) {
    showToast('Quick view feature coming soon!');
}

function toggleWishlist(productId) {
    showToast('Wishlist feature coming soon!');
}
