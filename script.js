// Mobile Menu Toggle (improved)
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

function closeMenu() {
    if (!menu || !menuToggle) return;
    menuToggle.classList.remove('active');
    menu.classList.remove('active');
    // if project uses Tailwind's hidden utility, keep it in sync
    menu.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
}

function openMenu() {
    if (!menu || !menuToggle) return;
    menuToggle.classList.add('active');
    menu.classList.add('active');
    menu.classList.remove('hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
}

if (menuToggle && menu) {
    // initialize aria
    if (!menuToggle.hasAttribute('aria-expanded')) menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        if (isOpen) closeMenu(); else openMenu();
    });

    // prevent clicks inside menu from closing it
    menu.addEventListener('click', (e) => e.stopPropagation());

    // Close menu when clicking on a link (and allow navigation)
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu when clicking outside (only if menu is open)
    document.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        if (isOpen) closeMenu();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // Support touch events for some mobile devices
    document.addEventListener('touchstart', (e) => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        if (isOpen && !e.target.closest('.main-nav')) closeMenu();
    }, { passive: true });
}

// Search functionality (optional enhancement)
const searchInput = document.getElementById('search-posts');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.style.boxShadow = '0 0 0 3px rgba(80, 179, 162, 0.2)';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.boxShadow = 'none';
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav indicator on scroll
function updateActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link, .nav-icon');
    const sections = document.querySelectorAll('#home, #cpp, #java, #webdev, #resources');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for sticky nav
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        const href = link.getAttribute('href').substring(1);
        
        if (href === currentSection) {
            link.classList.add('active-nav');
            if (link.classList.contains('nav-link')) {
                link.classList.add('!text-primary-200', '!border-b-primary-200');
            } else if (link.classList.contains('nav-icon')) {
                link.classList.add('!text-primary-200');
            }
        } else {
            if (link.classList.contains('nav-link')) {
                link.classList.remove('!text-primary-200', '!border-b-primary-200');
            } else if (link.classList.contains('nav-icon')) {
                link.classList.remove('!text-primary-200');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
document.addEventListener('DOMContentLoaded', updateActiveNav);
