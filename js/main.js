// main JS file
// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    } else {
        console.warn('Hamburger or nav-menu element not found in the DOM.');
    }
});

// Simple Shopping Cart Class
class ShoppingCart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('bakeryCart')) || [];
        this.updateCartCounter();
    }

    // Add item to cart
    addItem(name, price) {
        const item = {
            id: Date.now() + Math.random(), // Simple unique ID
            name: name,
            price: parseFloat(price),
            quantity: 1
        };

        // Check if item already exists (same name)
        const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push(item);
        }
        
        this.saveToStorage();
        this.updateCartCounter();
        this.showNotification(name);
        return true;
    }

    // Remove item from cart
    removeItem(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.saveToStorage();
        this.updateCartCounter();
        this.renderCart();
    }

    // Update item quantity
    updateQuantity(id, newQuantity) {
        const item = this.cart.find(item => item.id === id);
        if (item) {
            item.quantity = newQuantity;
            if (newQuantity <= 0) {
                this.removeItem(id);
            } else {
                this.saveToStorage();
                this.updateCartCounter();
                this.renderCart();
            }
        }
    }

    // Get total items count
    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Get total price
    getTotalPrice() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Save to localStorage
    saveToStorage() {
        localStorage.setItem('bakeryCart', JSON.stringify(this.cart));
    }

    // Update cart counter display
    updateCartCounter() {
        const counter = document.getElementById('cartCounter');
        if (counter) {
            const totalItems = this.getTotalItems();
            counter.textContent = totalItems;
            counter.classList.toggle('show', totalItems > 0);
        }
    }

    // Show add-to-cart notification
    showNotification(itemName) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `Added <strong>${itemName}</strong> to cart!`;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1002;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Clear entire cart
    clearCart() {
        if (confirm('Are you sure you want to clear your cart?')) {
            this.cart = [];
            this.saveToStorage();
            this.updateCartCounter();
            this.renderCart();
        }
    }

    // Render cart items in modal
    renderCart() {
        const cartContainer = document.getElementById('cartItems');
        const totalElement = document.getElementById('cartTotal');
        
        if (this.cart.length === 0) {
            cartContainer.innerHTML = `
                <div style="text-align: center; padding: 40px 20px; color: #666;">
                    <i class="fas fa-shopping-cart" style="font-size: 48px; margin-bottom: 10px;"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
            totalElement.textContent = 'KSh 0';
            return;
        }

        cartContainer.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div style="flex: 1;">
                    <h4>${item.name}</h4>
                    <p>KSh ${item.price.toLocaleString()} each</p>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span style="min-width: 20px; text-align: center;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <div style="text-align: right; flex: 0 0 80px;">
                    <p class="item-total">KSh ${(item.price * item.quantity).toLocaleString()}</p>
                    <button class="remove-item" onclick="cart.removeItem('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        totalElement.textContent = `KSh ${this.getTotalPrice().toLocaleString()}`;
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Add event listeners for "Add to Cart" buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        e.preventDefault();
        
        const button = e.target;
        const name = button.dataset.name;
        const price = button.dataset.price;
        
        // Add to cart
        const success = cart.addItem(name, price);
        
        if (success) {
            // Visual feedback on button
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Added!';
            button.classList.add('added');
            
            // Reset button after 1.5 seconds
            setTimeout(() => {
                button.classList.remove('added');
                button.innerHTML = originalText;
            }, 1500);
        }
    }
});

// Cart modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartModal = document.getElementById('cartModal');
    const cartCounter = document.getElementById('cartCounter');
    const closeCartBtn = document.getElementById('closeCart');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Toggle cart modal when clicking counter
    if (cartCounter) {
        cartCounter.addEventListener('click', function(e) {
            e.stopPropagation();
            cartModal.classList.toggle('open');
            if (cartModal.classList.contains('open')) {
                cart.renderCart();
            }
        });
    }

    // Close cart modal
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', function() {
            cartModal.classList.remove('open');
        });
    }

    // Close when clicking outside modal
    document.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.classList.remove('open');
        }
    });

    // Checkout button (placeholder - you can replace with form submission)
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.getTotalItems() > 0) {
                alert(`Proceeding to checkout with ${cart.getTotalItems()} items totaling KSh ${cart.getTotalPrice().toLocaleString()}`);
                // Here you could redirect to a checkout page or show a form
                // window.location.href = 'checkout.html';
            } else {
                alert('Your cart is empty!');
            }
        });
    }

    // Add slide animations CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
