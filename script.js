// ==================== Navigation Functionality ====================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==================== Booking Form ====================
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const vehicle = document.getElementById('vehicle').value;

    // Format the WhatsApp message
    const message = `🚗 *New Booking Request - Dev Travels*\n\n` +
        `📍 *Pickup Location:* ${pickup}\n` +
        `🎯 *Drop-off Location:* ${dropoff}\n` +
        `📅 *Date:* ${date}\n` +
        `🕐 *Time:* ${time}\n` +
        `🚙 *Vehicle Type:* ${vehicle}\n\n` +
        `Thank you for choosing Dev Travels!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp number (remove + and spaces)
    const whatsappNumber = '919601746991';

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success message
    showNotification('Opening WhatsApp to send your booking request...', 'success');

    // Reset form after a short delay
    setTimeout(() => {
        bookingForm.reset();
    }, 1000);
});

// ==================== Contact Form ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Format the WhatsApp message
    const whatsappMessage = `📧 *New Contact Inquiry - Dev Travels*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📧 *Email:* ${email}\n` +
        `📱 *Phone:* ${phone}\n\n` +
        `💬 *Message:*\n${message}\n\n` +
        `---\nSent from Dev Travels Website`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number
    const whatsappNumber = '919601746991';

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show success message
    showNotification('Opening WhatsApp to send your message...', 'success');

    // Reset form after a short delay
    setTimeout(() => {
        contactForm.reset();
    }, 1000);
});

// ==================== Notification System ====================
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span>
            <span class="notification-message">${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-width: 300px;
        max-width: 500px;
        animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-icon {
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .notification-message {
        font-size: 0.95rem;
        line-height: 1.4;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.2s;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(style);

// ==================== Smooth Scroll Enhancement ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .fleet-card, .feature-item, .visual-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// ==================== Set minimum date for booking ====================
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// ==================== Dynamic Stats Counter ====================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K+';
    }
    return num + '+';
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('K')) {
                    const value = parseFloat(text) * 1000;
                    animateCounter(stat, value);
                } else if (text.includes('/')) {
                    // Skip 24/7
                } else {
                    const value = parseInt(text);
                    if (!isNaN(value)) {
                        animateCounter(stat, value);
                    }
                }
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ==================== CTA Button Scroll Behavior ====================
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        const bookingCard = document.querySelector('.booking-card');
        if (bookingCard) {
            bookingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a subtle pulse animation
            bookingCard.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                bookingCard.style.animation = '';
            }, 500);
        }
    });
}

// ==================== Service Link Behavior ====================
document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== Loading Animation ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== Console Welcome Message ====================
console.log('%c🚗 Welcome to Dev Travels! 🚗', 'color: #E31E24; font-size: 20px; font-weight: bold;');
console.log('%cYour journey, our passion.', 'color: #2B5F9E; font-size: 14px;');
console.log('%cWebsite developed with ❤️', 'color: #F7941D; font-size: 12px;');
