// Filter products by category
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(category) || (category === 'all' && btn.textContent.includes('All'))) {
            btn.classList.add('active');
        }
    });
    
    // Filter products
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
            product.style.animation = 'fadeInUp 0.5s';
        } else {
            product.style.display = 'none';
        }
    });
}

// Make product cards clickable
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.clickable-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on the Details button
            if (e.target.classList.contains('btn-details')) {
                return;
            }
            
            const productId = this.getAttribute('data-product-id');
            if (productId) {
                window.location.href = '/product/' + productId;
            }
        });
    });
});

// Handle purchase button click
function handlePurchase() {
    alert('🎉 Thank you for your interest!\n\nThis is a demo website. To enable real purchases, you would integrate a payment gateway like Stripe, PayPal, or Square.\n\nFor now, enjoy browsing our collection! 📚');
}

// Smooth scroll for anchor links + highlight Contact nav on click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // If clicking a nav anchor link, mark it active
        const navLink = document.querySelector(`.nav-links a[href="${href}"]`);
        if (navLink) {
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
});

// Highlight Contact nav when #contact section scrolls into view
(function () {
    const contactSection = document.getElementById('contact');
    const contactNavLink = document.querySelector('.nav-links a[href="#contact"]');
    if (!contactSection || !contactNavLink) return;

    // Also activate immediately if page loaded with #contact hash
    if (window.location.hash === '#contact') {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        contactNavLink.classList.add('active');
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                contactNavLink.classList.add('active');
            } else {
                // Remove active only if no other nav link should be active
                contactNavLink.classList.remove('active');
                // Re-apply the page-level active link
                const pageActive = document.querySelector('.nav-links a.page-active');
                if (pageActive) pageActive.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    observer.observe(contactSection);

    // Mark the current page nav link so we can restore it
    document.querySelectorAll('.nav-links a:not([href="#contact"])').forEach(a => {
        if (a.classList.contains('active')) {
            a.classList.add('page-active');
        }
    });
})();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// Console message for developers
console.log('%c📚 Asmitha Explores Bookstore', 'font-size: 20px; font-weight: bold; color: #4ECDC4;');
console.log('%cMade with ❤️ for young readers', 'font-size: 14px; color: #FF6B6B;');
console.log('%cBuilt with Spring Boot, Thymeleaf, and vanilla JavaScript', 'font-size: 12px; color: #7F8C8D;');

