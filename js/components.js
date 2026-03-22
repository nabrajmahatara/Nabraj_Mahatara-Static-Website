class Components {
  static init() {
    this.injectNavbar();
    this.injectFooter();
    this.setActiveNav();
  }

  static injectNavbar() {
    const navbarHTML = `
      <nav class="navbar">
        <div class="navbar-container">
          <div class="navbar-brand">
            <a href="index.html">Nabraj Mahatara</a>
          </div>
          <ul class="navbar-nav">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="about.html" class="nav-link">About & Skills</a></li>
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
        <p>&copy; ${currentYear} Nabraj Mahatara. All Rights Reserved.</p>
        <p>IT Student & System Administrator</p>
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
      // Set active link for exact match (or if current path is empty for index.html)
      if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Components.init();
});
