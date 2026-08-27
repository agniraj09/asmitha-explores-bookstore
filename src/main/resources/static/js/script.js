// Filter products by category
// Category groups: certain filter buttons can match multiple underlying
// product categories (e.g. "Books" matches both "Learning Books" and "Story Books").
const CATEGORY_GROUPS = {
    'Books': ['Learning Books', 'Story Books']
};

// ── Discourage saving / opening product & review images ────────────
// Block context menu ("Open image in new tab", "Save image as…") and
// native drag-to-save on product / review images. This is a best-effort
// deterrent — not a security control — but stops the common actions.
(function () {
    function shouldBlock(target) {
        if (!target) return false;
        // Block on product card images, product-detail images, and review images
        return !!(
            target.closest && (
                target.closest('.product-image') ||
                target.closest('.product-detail-image') ||
                target.classList.contains('review-img') ||
                target.id === 'lightboxImg'
            )
        );
    }

    document.addEventListener('contextmenu', function (e) {
        if (e.target && (e.target.tagName === 'IMG' || shouldBlock(e.target))) {
            if (shouldBlock(e.target)) e.preventDefault();
        }
    });

    document.addEventListener('dragstart', function (e) {
        if (e.target && e.target.tagName === 'IMG' && shouldBlock(e.target)) {
            e.preventDefault();
        }
    });
})();

function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        const matchesData = filter && filter === category;
        // Fallback: match by text content (legacy)
        const matchesText = !filter && (
            btn.textContent.includes(category) ||
            (category === 'all' && btn.textContent.includes('All'))
        );
        btn.classList.toggle('active', matchesData || matchesText);
    });

    // Resolve the requested filter to one or more product categories
    const targetCategories = CATEGORY_GROUPS[category] || [category];

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const shouldShow = category === 'all' || targetCategories.includes(productCategory);
        if (shouldShow) {
            product.style.display = '';
            // Force visible: the .reveal base state is opacity:0, and the fadeInUp
            // animation is what makes it visible. If a card hasn't been observed
            // yet (or was hidden by a previous filter), make sure it's shown now.
            product.classList.add('is-visible');
        } else {
            product.style.display = 'none';
        }
    });
}

// ── Mobile hamburger nav toggle ────────────────────────────────
(function () {
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('primaryNav') || document.querySelector('.nav-links');
    if (!toggle || !navList) return;

    const DESKTOP_MQ = window.matchMedia('(min-width: 900px)');

    function closeMenu() {
        navList.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
    }
    function openMenu() {
        navList.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close menu');
    }

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navList.classList.contains('is-open')) closeMenu();
        else openMenu();
    });

    // Close on link tap
    navList.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (!DESKTOP_MQ.matches) closeMenu();
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!navList.classList.contains('is-open')) return;
        if (navList.contains(e.target) || toggle.contains(e.target)) return;
        closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // Reset when moving between mobile / desktop
    DESKTOP_MQ.addEventListener('change', closeMenu);
})();

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


// Mobile Share Button logic for product-detail page
document.addEventListener('DOMContentLoaded', function () {
    const shareBtn = document.getElementById('mobileShareBtn');
    if (shareBtn) {
        if (!navigator.share) {
            shareBtn.style.display = 'none';
            return;
        }
        shareBtn.addEventListener('click', function () {
            const productName = document.querySelector('.product-detail-info h1')?.textContent?.trim() || document.title;
            const productDesc = document.querySelector('.product-detail-description')?.textContent?.trim() || '';
            const url = window.location.href;
            const shareData = {
                title: productName,
                text: productDesc,
                url: url
            };
            navigator.share(shareData).catch(() => {});
        });
    }
});

// Console message
console.log('%c📚 Asmitha Explores Bookstore', 'font-size: 20px; font-weight: bold; color: #F43F5E;');
console.log('%cMade with ❤️ for young readers', 'font-size: 14px; color: #FBBF24;');

// ── Reveal on scroll (IntersectionObserver) ───────────────────────
(function () {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    // If reduced motion, show everything immediately
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealEls.forEach(el => el.classList.add('is-visible'));
        return;
    }

    if (!('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Small stagger for a gentle wave effect
                const delay = Math.min(i * 60, 300);
                entry.target.style.animationDelay = delay + 'ms';
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));
})();

