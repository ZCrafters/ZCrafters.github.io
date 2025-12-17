// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                display: ['Syne', 'sans-serif'],
            },
            colors: {
                brand: {
                    green: '#B4F73D',
                    black: '#050505',
                    dark: '#0a0a0a',
                    surface: '#111111'
                }
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}

// Initialize Icons
lucide.createIcons();

// Initialize Animate On Scroll (AOS)
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Navbar Scroll Logic
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-3');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.add('py-4');
        navbar.classList.remove('py-3');
    }
});

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
    const isHidden = mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
}

function closeMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
}

if (mobileMenuBtn && mobileMenu && mobileMenuCloseBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileMenuCloseBtn.addEventListener('click', closeMenu);
}
