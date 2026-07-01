// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-card, .hero').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== IMAGE FALLBACK =====
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        const parent = this.parentElement;
        if (this.alt && this.alt.includes('Nishtha')) {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.width = '180px';
            placeholder.style.height = '180px';
            placeholder.style.borderRadius = '50%';
            placeholder.style.background = 'linear-gradient(135deg, #2563eb, #1e3a8a)';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = 'white';
            placeholder.style.fontSize = '3rem';
            placeholder.style.fontWeight = '700';
            placeholder.textContent = 'NP';
            parent.appendChild(placeholder);
        } else {
            const wrapper = this.closest('.project-image-wrapper');
            if (wrapper) {
                this.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.style.width = '100%';
                fallback.style.height = '100%';
                fallback.style.display = 'flex';
                fallback.style.alignItems = 'center';
                fallback.style.justifyContent = 'center';
                fallback.style.background = '#e2e8f0';
                fallback.style.color = '#475569';
                fallback.style.fontWeight = '600';
                fallback.style.fontSize = '1rem';
                fallback.textContent = '📷 ' + (this.alt || 'Project Image');
                wrapper.appendChild(fallback);
            }
        }
    };
});

// ===== YEAR AUTO-UPDATE =====
document.addEventListener('DOMContentLoaded', function() {
    const footerText = document.querySelector('.contact-section .fa-heart')?.parentElement;
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
    }
});

console.log('🚀 Nishtha Parve Portfolio loaded successfully!');