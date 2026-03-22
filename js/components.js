class Components {
  static init() {
    this.injectNavbar();
    this.injectFooter();
    this.setActiveNav();
    this.initScrollEffect();
  }

  static injectNavbar() {
    const navbarHTML = `
      <nav class="navbar" id="navbar">
        <div class="navbar-container">
          <div class="navbar-brand">
            <a href="index.html"><i class="fa-solid fa-server"></i> <span>Nabraj</span> Mahatara</a>
          </div>
          <ul class="navbar-nav">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="about.html" class="nav-link">Expertise</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>
    `;
    const headerElement = document.getElementById('main-header');
    if (headerElement) {
      headerElement.innerHTML = navbarHTML;
    }
  }

  static injectFooter() {
    const currentYear = new Date().getFullYear();
    const footerHTML = `
      <footer class="footer">
        <div class="social-links">
          <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
        </div>
        <p class="footer-text">&copy; ${currentYear} Nabraj Mahatara. All Rights Reserved.</p>
        <p class="footer-text" style="margin-top: 0.5rem; font-size: 0.8rem;">IT Student & System Administrator</p>
      </footer>
    `;
    const footerElement = document.getElementById('main-footer');
    if (footerElement) {
      footerElement.innerHTML = footerHTML;
    }
  }

  static setActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  static initScrollEffect() {
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Components.init();
});
