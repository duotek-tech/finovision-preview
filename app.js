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

  // ==========================================
  // 5. INTERACTIVE UAE CORPORATE TAX & VAT SIMULATOR
  // ==========================================
  const calcWrap = document.querySelector('.finoza-calculator-wrap');
  if (calcWrap) {
    const revenueSlider = calcWrap.querySelector('#calc-revenue-slider');
    const revenueDisplay = calcWrap.querySelector('#revenue-val-display');
    const profitDisplay = calcWrap.querySelector('#profit-val-display');
    const taxAmountDisplay = calcWrap.querySelector('#tax-amount-display');
    const taxStatusBadge = calcWrap.querySelector('#tax-status-badge');
    const taxNoteDisplay = calcWrap.querySelector('#tax-note-display');
    const vatStatusDisplay = calcWrap.querySelector('#vat-status-display');
    const vatNoteDisplay = calcWrap.querySelector('#vat-note-display');
    const einvStatusDisplay = calcWrap.querySelector('#einv-status-display');
    const einvNoteDisplay = calcWrap.querySelector('#einv-note-display');
    const jurisdictionBtns = calcWrap.querySelectorAll('.calc-toggle-btn');
    const presetBtns = calcWrap.querySelectorAll('.preset-pill');
    const marginBtns = calcWrap.querySelectorAll('.margin-pill');

    let currentJurisdiction = 'mainland';
    let currentRevenue = 1500000;
    let currentMargin = 0.20;

    const formatAED = (num) => {
      return 'AED ' + Math.round(num).toLocaleString('en-US');
    };

    const updateCalculator = () => {
      // 1. Calculate Profit
      const estimatedProfit = currentRevenue * currentMargin;

      // Update input displays
      if (revenueDisplay) revenueDisplay.textContent = formatAED(currentRevenue);
      if (profitDisplay) {
        profitDisplay.textContent = `${formatAED(estimatedProfit)} (${Math.round(currentMargin * 100)}%)`;
      }

      // 2. Calculate UAE Corporate Tax
      // Standard UAE CT Threshold: AED 375,000 at 0%, excess at 9%
      const THRESHOLD = 375000;
      let taxLiability = 0;

      if (currentJurisdiction === 'freezone') {
        // Designated Free Zone Qualifying Income Relief (0%)
        taxLiability = 0;
        if (taxAmountDisplay) taxAmountDisplay.textContent = 'AED 0';
        if (taxStatusBadge) {
          taxStatusBadge.className = 'result-status-badge freezone-relief';
          taxStatusBadge.textContent = '0% Qualifying Income Relief';
        }
        if (taxNoteDisplay) {
          const potentialTax = Math.max(0, (estimatedProfit - THRESHOLD) * 0.09);
          if (potentialTax > 0) {
            taxNoteDisplay.textContent = `Free Zone relief saves ${formatAED(potentialTax)}.`;
          } else {
            taxNoteDisplay.textContent = 'Qualifying Free Zone Persons enjoy 0% CT.';
          }
        }
      } else {
        // Mainland LLC
        if (estimatedProfit <= THRESHOLD) {
          taxLiability = 0;
          if (taxAmountDisplay) taxAmountDisplay.textContent = 'AED 0';
          if (taxStatusBadge) {
            taxStatusBadge.className = 'result-status-badge under-threshold';
            taxStatusBadge.textContent = '0% Under AED 375K Threshold';
          }
          if (taxNoteDisplay) {
            taxNoteDisplay.textContent = 'Statutory 0% profit threshold applied.';
          }
        } else {
          taxLiability = (estimatedProfit - THRESHOLD) * 0.09;
          if (taxAmountDisplay) taxAmountDisplay.textContent = formatAED(taxLiability);
          if (taxStatusBadge) {
            taxStatusBadge.className = 'result-status-badge taxable';
            taxStatusBadge.textContent = 'Standard 9% Corporate Tax';
          }
          if (taxNoteDisplay) {
            taxNoteDisplay.textContent = `Taxable excess: ${formatAED(estimatedProfit - THRESHOLD)}.`;
          }
        }
      }

      // 3. UAE VAT Threshold Rules
      if (currentRevenue >= 375000) {
        if (vatStatusDisplay) vatStatusDisplay.textContent = 'Mandatory Registration';
        if (vatNoteDisplay) vatNoteDisplay.textContent = 'Quarterly returns required via EmaraTax.';
      } else if (currentRevenue >= 187500) {
        if (vatStatusDisplay) vatStatusDisplay.textContent = 'Voluntary Eligible';
        if (vatNoteDisplay) vatNoteDisplay.textContent = 'Optional registration to reclaim input VAT.';
      } else {
        if (vatStatusDisplay) vatStatusDisplay.textContent = 'Registration Exempt';
        if (vatNoteDisplay) vatNoteDisplay.textContent = 'Below mandatory AED 375K turnover threshold.';
      }

      // 4. E-Invoicing Phase 2 Status
      if (einvStatusDisplay) einvStatusDisplay.textContent = 'Phase 2 Mandate';
      if (einvNoteDisplay) einvNoteDisplay.textContent = 'PEPPOL / XML format readiness required for B2B.';
    };

    // Event: Jurisdiction buttons
    jurisdictionBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        jurisdictionBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentJurisdiction = btn.getAttribute('data-jurisdiction') || 'mainland';
        updateCalculator();
      });
    });

    // Event: Revenue Slider
    if (revenueSlider) {
      revenueSlider.addEventListener('input', (e) => {
        currentRevenue = parseFloat(e.target.value) || 0;
        presetBtns.forEach((p) => {
          const val = parseFloat(p.getAttribute('data-preset'));
          p.classList.toggle('active', Math.abs(val - currentRevenue) < 25000);
        });
        updateCalculator();
      });
    }

    // Event: Preset Pills
    presetBtns.forEach((pill) => {
      pill.addEventListener('click', () => {
        presetBtns.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        const val = parseFloat(pill.getAttribute('data-preset')) || 1500000;
        currentRevenue = val;
        if (revenueSlider) revenueSlider.value = String(val);
        updateCalculator();
      });
    });

    // Event: Profit Margin Pills
    marginBtns.forEach((pill) => {
      pill.addEventListener('click', () => {
        marginBtns.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        currentMargin = parseFloat(pill.getAttribute('data-margin')) || 0.20;
        updateCalculator();
      });
    });

    // Initial calculation run
    updateCalculator();
  }
});
