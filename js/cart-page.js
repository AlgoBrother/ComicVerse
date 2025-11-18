// Cart Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    
    if (cart.items.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <a href="browse.html" class="btn btn-primary">Browse Comics</a>
            </div>
        `;
        cartSummary.style.display = 'none';
        return;
    }
    
    // Display cart items
    const itemsHTML = cart.items.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <div class="cart-item-publisher">${item.publisher}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        </div>
    `).join('');
    
    cartItemsContainer.innerHTML = itemsHTML;
    cartSummary.style.display = 'block';
    
    // Update summary
    updateSummary();
}

function updateQuantity(comicId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(comicId);
        return;
    }
    
    cart.updateQuantity(comicId, newQuantity);
    displayCart();
}

function removeFromCart(comicId) {
    cart.removeItem(comicId);
    displayCart();
}

function updateSummary() {
    const subtotal = cart.getTotal();
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.add('active');
    
    // Clear cart after a delay
    setTimeout(() => {
        cart.clear();
    }, 1000);
}

function closeModal() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('active');
    window.location.href = 'index.html';
}
