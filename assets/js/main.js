// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  htmlElement.setAttribute('data-theme', 'dark');
  updateThemeIcon();
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  htmlElement.classList.remove('theme-light', 'theme-dark');
  htmlElement.classList.add(`theme-${newTheme}`);
  
  document.body.classList.remove('theme-light', 'theme-dark');
  document.body.classList.add(`theme-${newTheme}`);
  
  localStorage.setItem('theme', newTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
  const icon = themeToggle?.querySelector('i');
  if (icon) {
    icon.classList.toggle('fa-moon', currentTheme === 'light');
    icon.classList.toggle('fa-sun', currentTheme === 'dark');
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a.js-scroll-trigger[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Close mobile menu after clicking a link
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const collapseButton = document.querySelector('.navbar-toggler');
      collapseButton?.click();
    }
  });
});

// Highlight active navigation item based on scroll position
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Lazy loading images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
