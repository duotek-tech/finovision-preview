// Mobile Navigation Toggle
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navLinks.classList.toggle('open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

// CONCEPT B: Interactive Persona Intelligence Switcher
const personaBtns = document.querySelectorAll('.persona-btn');
const personaPanels = document.querySelectorAll('.persona-panel');

if (personaBtns.length > 0) {
  personaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      personaBtns.forEach((b) => b.classList.remove('active'));
      personaPanels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// CONCEPT C: Interactive Solutions Filter Tabs
const filterTabs = document.querySelectorAll('.filter-tab');
const solutionCards = document.querySelectorAll('.solution-card');

if (filterTabs.length > 0 && solutionCards.length > 0) {
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      solutionCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Contact Form Submissions Handling
document.querySelectorAll('.contact-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      status.textContent = '✓ Consultation request received. In the live website, an advisor will contact you within 1 business day.';
      status.style.color = '#27c93f';
      status.style.fontWeight = 'bold';
    }
  });
});
