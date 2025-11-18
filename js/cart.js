// Cart Management with localStorage
class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartCount();
    }

    loadCart() {
        const saved = localStorage.getItem('comicCart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('comicCart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    addItem(comic) {
        const existingItem = this.items.find(item => item.id === comic.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: comic.id,
                title: comic.title,
                publisher: comic.publisher,
                price: comic.price,
                image: comic.image,
                quantity: 1
            });
        }
        
        this.saveCart();
        return true;
    }

    removeItem(comicId) {
        this.items = this.items.filter(item => item.id !== comicId);
        this.saveCart();
    }

    updateQuantity(comicId, quantity) {
        const item = this.items.find(item => item.id === comicId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    updateCartCount() {
        const countElements = document.querySelectorAll('#cart-count');
        const count = this.getItemCount();
        countElements.forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'inline' : 'none';
        });
    }

    clear() {
        this.items = [];
        this.saveCart();
    }
}

// Initialize cart
const cart = new Cart();

// Add to cart function
function addToCart(comicId) {
    const comic = comicsData.find(c => c.id === comicId);
    if (comic) {
        cart.addItem(comic);
        showNotification(`${comic.title} added to cart!`);
    }
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animation styles
if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}
