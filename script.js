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
