/**
 * Mobile Menu Toggle
 * Handles the hamburger menu functionality for mobile devices
 */
class MobileMenu {
  constructor() {
    this.menuToggle = document.getElementById('menu-toggle');
    this.menu = document.getElementById('menu');
    this.init();
  }

  init() {
    if (!this.menuToggle || !this.menu) return;

    this.menuToggle.addEventListener('click', () => this.toggleMenu());
    this.menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.main-nav')) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.menuToggle.classList.toggle('active');
    this.menu.classList.toggle('active');
    const isExpanded = this.menuToggle.getAttribute('aria-expanded') === 'true';
    this.menuToggle.setAttribute('aria-expanded', !isExpanded);
  }

  closeMenu() {
    this.menuToggle.classList.remove('active');
    this.menu.classList.remove('active');
    this.menuToggle.setAttribute('aria-expanded', 'false');
  }
}

/**
 * Search Enhancement
 * Provides visual feedback for search input interactions
 */
class SearchEnhancement {
  constructor() {
    this.searchInput = document.getElementById('search-posts');
    this.init();
  }

  init() {
    if (!this.searchInput) return;

    this.searchInput.addEventListener('focus', () => {
      this.searchInput.classList.add('ring-2', 'ring-primary-200');
    });

    this.searchInput.addEventListener('blur', () => {
      this.searchInput.classList.remove('ring-2', 'ring-primary-200');
    });
  }
}

/**
 * Smooth Scroll Handler
 * Handles smooth scrolling for anchor links
 */
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => this.handleScroll(e));
    });
  }

  handleScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

/**
 * Initialize all modules on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  new MobileMenu();
  new SearchEnhancement();
  new SmoothScroll();

  console.log('CodeJourney Blog loaded successfully');
});

// Export for module usage
export { MobileMenu, SearchEnhancement, SmoothScroll };
