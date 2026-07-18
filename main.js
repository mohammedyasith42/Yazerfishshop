document.addEventListener('DOMContentLoaded', () => {
    hideLoadingScreen();
    renderProducts();
    updateCartUI();
    initAnimations();
    initEventListeners();
    initScrollProgress();
    initStockCounter();
});

function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 1500);
}

function initEventListeners() {
    const cartToggle = document.getElementById('cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartClose = document.getElementById('cart-close');
    
    if (cartToggle && cartSidebar && cartOverlay) {
        cartToggle.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        });
        
        cartOverlay.addEventListener('click', closeCart);
        if (cartClose) cartClose.addEventListener('click', closeCart);
    }
    
    const searchToggle = document.getElementById('search-toggle');
    const searchPopup = document.getElementById('search-popup');
    const searchClose = document.getElementById('search-close');
    
    if (searchToggle && searchPopup) {
        searchToggle.addEventListener('click', () => {
            searchPopup.classList.add('active');
        });
        
        if (searchClose) searchClose.addEventListener('click', () => {
            searchPopup.classList.remove('active');
        });
        
        searchPopup.addEventListener('click', (e) => {
            if (e.target === searchPopup) {
                searchPopup.classList.remove('active');
            }
        });
    }
    
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
}

function initScrollProgress() {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

function initStockCounter() {
    let stock = 15;
    const countdownEl = document.getElementById('stock-countdown');
    const progressEl = document.getElementById('stock-progress');
    
    if (!countdownEl || !progressEl) return;
    
    setInterval(() => {
        if (stock > 0) {
            stock--;
            countdownEl.textContent = stock;
            const progress = (stock / 15) * 100;
            progressEl.style.width = progress + '%';
        } else {
            stock = 15;
        }
    }, 5000);
}

function showToast(message) {
    const toast = document.getElementById('notification-toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
