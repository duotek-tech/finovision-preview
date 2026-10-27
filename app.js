/**
 * Finovision Business Solutions LLC — Client-Side Application Script
 * 
 * Features:
 * - Accessible mobile navigation drawer with keyboard and focus handling
 * - Viewport intersection observer for smooth scroll-reveal animations
 * - Client consultation request form handling and feedback states
 *
 * @version 1.0.0
 * @license Proprietary
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. MOBILE NAVIGATION DRAWER
  // ==========================================
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    const toggleNavigation = (forceClose = false) => {
      const isCurrentlyOpen = menuButton.getAttribute('aria-expanded') === 'true';
      const nextState = forceClose ? false : !isCurrentlyOpen;

      menuButton.setAttribute('aria-expanded', String(nextState));
      menuButton.setAttribute('aria-label', nextState ? 'Close navigation' : 'Open navigation');
      navLinks.classList.toggle('open', nextState);
      document.body.style.overflow = nextState ? 'hidden' : '';
    };

    menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNavigation();
    });

    // Close navigation when a link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        toggleNavigation(true);
      });
    });

    // Close navigation when 'Escape' key is pressed
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        toggleNavigation(true);
        menuButton.focus();
      }
    });

    // Close navigation when clicking outside of the drawer
    document.addEventListener('click', (e) => {
      if (
        menuButton.getAttribute('aria-expanded') === 'true' &&
        !navLinks.contains(e.target) &&
        !menuButton.contains(e.target)
      ) {
        toggleNavigation(true);
      }
    });
  }

  // ==========================================
  // 2. SCROLL REVEAL OBSERVER
  // ==========================================
  if ('IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver support
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('visible');
    });
  }

  // ==========================================
  // 3. CONSULTATION REQUEST FORM HANDLING
  // ==========================================
  const forms = document.querySelectorAll('.contact-form');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const statusElement = form.querySelector('.form-status');
      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');

      if (!nameInput?.value.trim() || !emailInput?.value.trim()) {
        if (statusElement) {
          statusElement.textContent = 'Please fill in all required contact details.';
          statusElement.style.color = '#ef4444';
          statusElement.style.fontWeight = '600';
        }
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }

      // Simulate instantaneous asynchronous submission receipt
      setTimeout(() => {
        if (statusElement) {
          statusElement.textContent = '✓ Consultation request received. A qualified Finovision advisor will contact you within 1 business day.';
          statusElement.style.color = '#10b981';
          statusElement.style.fontWeight = '700';
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
      }, 350);
    });
  });
});
