let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id, name, price, weight) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, weight, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    showToast('Item added to cart!');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.querySelector('#cart-toggle .badge');
    const wishlistCount = document.querySelector('#wishlist-toggle .badge');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    if (wishlistCount) wishlistCount.textContent = 0;
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center text-muted">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-img" style="background: linear-gradient(135deg, #e6f7ff, #f0f9ff);"></div>
                <div class="flex-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <div class="text-muted mb-2">₹${item.price} / ${item.weight}</div>
                    <div class="d-flex align-items-center gap-3">
                        <div class="d-flex align-items-center border rounded">
                            <button class="btn btn-sm px-3" onclick="updateQuantity('${item.id}', -1)">-</button>
                            <span class="px-3">${item.quantity}</span>
                            <button class="btn btn-sm px-3" onclick="updateQuantity('${item.id}', 1)">+</button>
                        </div>
                        <button class="btn btn-sm text-danger" onclick="removeFromCart('${item.id}')">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="text-end">
                    <strong>₹${item.price * item.quantity}</strong>
                </div>
            </div>
        `).join('');
    }
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const gst = Math.round(subtotal * 0.05);
    const delivery = subtotal > 0 ? 0 : 0;
    const total = subtotal + gst + delivery;
    
    document.getElementById('cart-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('cart-gst').textContent = `₹${gst}`;
    document.getElementById('cart-delivery').textContent = delivery === 0 ? 'Free' : `₹${delivery}`;
    document.getElementById('cart-total').textContent = `₹${total}`;
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    showToast('Checkout feature coming soon!');
}
