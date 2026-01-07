// Initialize EmailJS
emailjs.init('0P5U2yBi52e9du3d7');

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupThemeToggle();
    }

    applyTheme() {
        document.documentElement.classList.toggle('dark', this.theme === 'dark');
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.setAttribute('data-lucide', this.theme === 'light' ? 'moon' : 'sun');
            // Reinitialize Lucide icons
            lucide.createIcons();
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.header = document.getElementById('header');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        this.mobileMenuIcon = document.getElementById('mobile-menu-icon');
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.setupScrollHandler();
        this.setupMobileMenu();
        this.setupNavLinks();
    }

    setupScrollHandler() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.scrollY > 50;
                    this.header.classList.toggle('bg-background/95', scrolled);
                    this.header.classList.toggle('backdrop-blur-md', scrolled);
                    this.header.classList.toggle('border-b', scrolled);
                    this.header.classList.toggle('bg-transparent', !scrolled);
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    setupMobileMenu() {
        if (this.mobileMenuToggle) {
            this.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
    }

    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.mobileMenu.classList.toggle('hidden', !this.isMenuOpen);
        
        // Update icon
        this.mobileMenuIcon.setAttribute('data-lucide', this.isMenuOpen ? 'x' : 'menu');
        lucide.createIcons();
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        this.mobileMenu.classList.add('hidden');
        this.mobileMenuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }

    setupNavLinks() {
        const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.dataset.target;
                this.scrollToSection(target);
                if (link.classList.contains('nav-link-mobile')) {
                    this.closeMobileMenu();
                }
            });
        });
    }

    scrollToSection(selector) {
        const element = document.querySelector(selector);
        if (element) {
            const headerHeight = this.header.offsetHeight;
            const targetPosition = element.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Contact Form Management
class ContactFormManager {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = document.getElementById('submit-btn');
        this.isSubmitting = false;
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if (this.isSubmitting) return;

        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form
        if (!this.validateForm(data)) {
            return;
        }

        this.setSubmittingState(true);

        try {
            await this.sendEmail(data);
            this.showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.form.reset();
        } catch (error) {
            console.error('Error sending email:', error);
            this.showToast('Failed to send message. Please try again or contact me directly.', 'error');
        } finally {
            this.setSubmittingState(false);
        }
    }

    validateForm(data) {
        const errors = {};

        if (!data.name || data.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters long';
        }

        if (!data.email || !this.isValidEmail(data.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!data.subject || data.subject.trim().length < 5) {
            errors.subject = 'Subject must be at least 5 characters long';
        }

        if (!data.message || data.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters long';
        }

        // Display errors
        Object.keys(errors).forEach(field => {
            const input = this.form.querySelector(`[name="${field}"]`);
            if (input) {
                input.style.borderColor = '#ef4444';
                this.showToast(errors[field], 'error');
            }
        });

        // Clear error styling on input
        this.form.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                input.style.borderColor = '';
            });
        });

        return Object.keys(errors).length === 0;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async sendEmail(data) {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_name: 'Akanksha Mane'
        };

        return emailjs.send('service_dfbw97d', 'template_8obu6o1', templateParams);
    }

    setSubmittingState(isSubmitting) {
        this.isSubmitting = isSubmitting;
        
        if (this.submitBtn) {
            this.submitBtn.disabled = isSubmitting;
            const icon = this.submitBtn.querySelector('i');
            
            if (isSubmitting) {
                this.submitBtn.classList.add('loading');
                if (icon) {
                    icon.setAttribute('data-lucide', 'loader-2');
                    icon.classList.add('animate-spin');
                }
                this.submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 mr-2 animate-spin"></i> Sending...';
            } else {
                this.submitBtn.classList.remove('loading');
                this.submitBtn.innerHTML = '<i data-lucide="send" class="w-5 h-5 mr-2"></i> Send Message';
            }
            
            lucide.createIcons();
        }
    }

    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info';
        
        toast.innerHTML = `
            <i data-lucide="${icon}" class="w-5 h-5 mr-3 ${type === 'success' ? 'text-green-500' : type === 'error' ? 'text-red-500' : 'text-blue-500'}"></i>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);
        lucide.createIcons();

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slide-out-right 0.3s ease-in';
                setTimeout(() => toast.remove(), 300);
            }
        }, 5000);

        // Add click to dismiss
        toast.addEventListener('click', () => {
            toast.style.animation = 'slide-out-right 0.3s ease-in';
            setTimeout(() => toast.remove(), 300);
        });
    }
}

// Back to Top Button
class BackToTopManager {
    constructor() {
        this.button = document.getElementById('back-to-top');
        this.init();
    }

    init() {
        if (this.button) {
            this.setupScrollHandler();
            this.button.addEventListener('click', () => this.scrollToTop());
        }
    }

    setupScrollHandler() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const visible = window.scrollY > 300;
                    this.button.classList.toggle('visible', visible);
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Smooth Scroll Utility
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const header = document.getElementById('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Animation Observer
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        if (typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    rootMargin: '0px 0px -100px 0px',
                    threshold: 0.1
                }
            );

            // Observe elements that should animate in
            document.querySelectorAll('section, .card').forEach(el => {
                observer.observe(el);
            });
        }
    }
}

// Copy to Clipboard Utility
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            return Promise.resolve();
        } catch (err) {
            return Promise.reject(err);
        } finally {
            document.body.removeChild(textArea);
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize managers
    new ThemeManager();
    new NavigationManager();
    new ContactFormManager();
    new BackToTopManager();
    new AnimationObserver();

    // Global smooth scroll function
    window.scrollToSection = scrollToSection;

    // Add loading class removal after initial load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // Handle external link clicks
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Add any tracking or analytics here if needed
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const navManager = window.navigationManager;
            if (navManager && navManager.isMenuOpen) {
                navManager.closeMobileMenu();
            }
        }

        // Enter/Space on focused buttons
        if ((e.key === 'Enter' || e.key === ' ') && e.target.tagName === 'BUTTON') {
            e.preventDefault();
            e.target.click();
        }
    });

    console.log('🚀 Akanksha Mane Portfolio loaded successfully!');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Refresh icons when page becomes visible (in case of any issues)
        lucide.createIcons();
    }
});

// Error handling for images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Performance optimization: Lazy load animations
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
}

// Add CSS for animation keyframes that might be missing
const style = document.createElement('style');
style.textContent = `
    @keyframes slide-out-right {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Export utilities for potential external use
window.PortfolioUtils = {
    scrollToSection,
    copyToClipboard
};