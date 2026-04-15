// Filter products by category
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(category) || (category === 'all' && btn.textContent.includes('All'))) {
            btn.classList.add('active');
        }
    });

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
            product.style.animation = 'none';
        } else {
            product.style.display = 'none';
        }
    });
}

// Make product cards clickable
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.clickable-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.classList.contains('btn-details') || e.target.closest('.btn-details')) return;
            const productId = this.getAttribute('data-product-id');
            if (productId) window.location.href = '/product/' + productId;
        });
    });
});

// ── Nav highlight system ──────────────────────────────────────────
(function () {
    // Sections that have a matching nav anchor on this page
    const sections = [
        { id: 'reviews', href: '#reviews' },
        { id: 'contact', href: '#contact' }
    ].filter(s => document.getElementById(s.id) !== null);

    const navLinks = document.querySelectorAll('.nav-links a');

    // Helper: offset to scroll to so the section title is clearly visible
    // (accounts for sticky header height + a small breathing room)
    function getHeaderOffset() {
        const header = document.querySelector('header');
        return header ? header.offsetHeight + 16 : 80;
    }

    // Scroll to section with header offset
    function scrollToSection(targetEl) {
        const top = targetEl.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }

    // Set exactly one nav link active
    function setActive(href) {
        navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === href);
        });
    }

    // Determine which nav link should be active based on scroll position
    function updateNavOnScroll() {
        if (sections.length === 0) return;

        const offset = getHeaderOffset() + 32; // trigger point: just past header
        const scrollY = window.scrollY;
        const pageBottom = document.documentElement.scrollHeight - window.innerHeight;

        // If near bottom of page, activate the last anchor section
        if (scrollY >= pageBottom - 10) {
            setActive(sections[sections.length - 1].href);
            return;
        }

        // Walk sections in reverse: activate the last one whose top is above trigger
        let active = null;
        for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i].id);
            if (el && el.getBoundingClientRect().top + scrollY <= scrollY + offset) {
                active = sections[i].href;
                break;
            }
        }

        if (active) {
            setActive(active);
        } else {
            // Above all anchor sections — restore the page-level active link
            const pageActive = document.querySelector('.nav-links a.page-active');
            navLinks.forEach(a => a.classList.remove('active'));
            if (pageActive) pageActive.classList.add('active');
        }
    }

    // Anchor click: scroll with offset + set active immediately
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) scrollToSection(target);
            // Highlight immediately on click, scroll handler will keep it in sync
            const navLink = document.querySelector(`.nav-links a[href="${href}"]`);
            if (navLink) setActive(href);
        });
    });

    // Listen to scroll — debounced slightly for performance
    let scrollTimer;
    window.addEventListener('scroll', function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(updateNavOnScroll, 40);
    }, { passive: true });

    // Mark the page-level active link (non-anchor, e.g. Home / About)
    navLinks.forEach(a => {
        if (a.classList.contains('active') && !a.getAttribute('href').startsWith('#')) {
            a.classList.add('page-active');
        }
    });

    // Handle /#reviews or /#contact on load
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                scrollToSection(target);
                const navLink = document.querySelector(`.nav-links a[href="${window.location.hash}"]`);
                if (navLink) setActive(window.location.hash);
            }, 120);
        }
    }
})();

// Console message
console.log('%c📚 Asmitha Explores Bookstore', 'font-size: 20px; font-weight: bold; color: #4ECDC4;');
console.log('%cMade with ❤️ for young readers', 'font-size: 14px; color: #FF6B6B;');

