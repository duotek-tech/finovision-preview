/**
 * Finovision Business Solutions LLC — Client-Side Application Script
 * 
 * Features:
 * - Active navigation link highlighting for clean URLs (no .html extensions)
 * - Accessible mobile navigation drawer with keyboard and focus handling
 * - Viewport intersection observer for smooth scroll-reveal animations
 * - Client consultation request form handling and feedback states
 *
 * @version 1.1.0
 * @license Proprietary
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. ACTIVE NAVIGATION LINK MATCHING
  // ==========================================
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const navAnchors = document.querySelectorAll('.nav-links a:not(.button-finoza)');

  navAnchors.forEach((link) => {
    const linkHref = link.getAttribute('href');
    if (!linkHref) return;

    const normalizedHref = linkHref.replace(/\/$/, '') || '/';
    // Match exact path, or match without .html
    const cleanHref = normalizedHref.replace(/\.html$/, '');

    if (
      currentPath === cleanHref ||
      (currentPath === '/' && cleanHref === '/') ||
      (cleanHref !== '/' && currentPath.endsWith(cleanHref))
    ) {
      navAnchors.forEach((a) => a.classList.remove('active'));
      link.classList.add('active');
    }
  });

  // ==========================================
  // 2. FLOATING NAVIGATION ON SCROLL
  // ==========================================
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    const onScroll = () => {
      if (window.scrollY > 25) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run immediately on page load
  }

  // ==========================================
  // 3. MOBILE NAVIGATION DRAWER
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
  // 3. SCROLL REVEAL OBSERVER
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
  // 4. CONSULTATION REQUEST FORM HANDLING
  // ==========================================
  const forms = document.querySelectorAll('.contact-form');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const statusElement = form.querySelector('.form-status');
      const nameInput = form.querySelector('input[name="fullName"], input[type="text"]');
      const emailInput = form.querySelector('input[name="email"], input[type="email"]');

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
