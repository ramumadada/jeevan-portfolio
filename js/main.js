/**
 * Personal Portfolio - JavaScript Logic
 * Author: Utukuri Jeevan Kumar
 */

/* --------------------------------------------------
   0. Global Configuration
   -------------------------------------------------- */
const APP_CONFIG = {
  // Google Drive folder holding the live/updated resume
  resumeDriveUrl: 'https://drive.google.com/drive/folders/1dcwA-dCb2nv_o8Ld8FwvcgxHfeiY0-ma',
  
  // Direct WhatsApp instant messaging config
  whatsappNumber: '919505285128',
  whatsappDefaultMsg: 'Hi Jeevan, I would like to connect with you regarding an engineering opportunity.',
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMsg)}`;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initResumeLinks();
  initWhatsAppLinks();
  initTheme();
  initMobileMenu();
  initActiveNavLink();
  initScrollHeader();
  initContactForm();
  setCurrentYear();
});

/* --------------------------------------------------
   0b. Live Resume & WhatsApp Link Sync
   -------------------------------------------------- */
function initResumeLinks() {
  const resumeLinks = document.querySelectorAll('.resume-link');
  resumeLinks.forEach(link => {
    link.href = APP_CONFIG.resumeDriveUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  });
}

function initWhatsAppLinks() {
  const whatsappElements = document.querySelectorAll('.btn-whatsapp, .whatsapp-social-link, .whatsapp-action-link, .whatsapp-circle, #floating-whatsapp');
  whatsappElements.forEach(el => {
    el.href = APP_CONFIG.whatsappUrl;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });
}

/* --------------------------------------------------
   1. Theme Management (Dark / Light Mode)
   -------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve saved preference or check system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');
  htmlElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = htmlElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }
}

/* --------------------------------------------------
   2. Mobile Navigation Menu Toggle
   -------------------------------------------------- */
function initMobileMenu() {
  const menuToggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuToggleBtn || !navMenu) return;

  menuToggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggleBtn.setAttribute('aria-expanded', isOpen);
    
    // Toggle icon between hamburger and close
    const icon = menuToggleBtn.querySelector('i');
    if (icon) {
      if (isOpen) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    }
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
        const icon = menuToggleBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  });
}

/* --------------------------------------------------
   3. Active Navigation Link on Scroll
   -------------------------------------------------- */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);
}

/* --------------------------------------------------
   4. Header Shadow on Scroll
   -------------------------------------------------- */
function initScrollHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------
   5. Contact Form Validation & Submission Feedback
   -------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset previous errors
    clearFormErrors();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    let hasError = false;

    if (!name) {
      showError('name', 'Please enter your name');
      hasError = true;
    }

    if (!email) {
      showError('email', 'Please enter your email');
      hasError = true;
    } else if (!isValidEmail(email)) {
      showError('email', 'Please enter a valid email address');
      hasError = true;
    }

    if (!subject) {
      showError('subject', 'Please enter a subject');
      hasError = true;
    }

    if (!message) {
      showError('message', 'Please enter a message');
      hasError = true;
    }

    if (hasError) return;

    // Simulate submission state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      feedback.className = 'form-feedback success';
      feedback.innerHTML = `<strong>Thank you!</strong> Your message has been submitted. For an instant response, you can also <a href="${APP_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: underline; font-weight: 700;">chat directly on WhatsApp <i class="fa-brands fa-whatsapp"></i></a>.`;

      form.reset();

      setTimeout(() => {
        feedback.style.display = 'none';
      }, 5000);
    }, 1200);
  });
}

function showError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const errorSpan = document.getElementById(`${fieldId}-error`);

  if (input) input.classList.add('input-error');
  if (errorSpan) errorSpan.textContent = message;
}

function clearFormErrors() {
  const errorInputs = document.querySelectorAll('.input-error');
  errorInputs.forEach(input => input.classList.remove('input-error'));

  const errorSpans = document.querySelectorAll('.form-error');
  errorSpans.forEach(span => span.textContent = '');

  const feedback = document.getElementById('form-feedback');
  if (feedback) feedback.style.display = 'none';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* --------------------------------------------------
   6. Current Year for Footer
   -------------------------------------------------- */
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
