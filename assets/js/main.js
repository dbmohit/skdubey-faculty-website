/**
 * Faculty Website - Dr. Sarvesh Kumar Dubey
 * Interactive functionality: Search, Filter, Scrollspy, Mobile Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', !expanded);
    });

    // Close mobile nav when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Publications Filter & Live Search
  const searchInput = document.getElementById('pubSearchInput');
  const filterButtons = document.querySelectorAll('.pub-filter-btn');
  const pubCards = document.querySelectorAll('.pub-card');
  const pubCountDisplay = document.getElementById('pubVisibleCount');

  let activeType = 'all';
  let searchTerm = '';

  function filterPublications() {
    let visibleCount = 0;

    pubCards.forEach(card => {
      const type = card.getAttribute('data-type') || '';
      const text = card.textContent.toLowerCase();

      const matchesType = (activeType === 'all') || (type === activeType);
      const matchesSearch = !searchTerm || text.includes(searchTerm);

      if (matchesType && matchesSearch) {
        card.style.display = 'grid';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (pubCountDisplay) {
      pubCountDisplay.textContent = visibleCount;
    }
  }

  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeType = btn.getAttribute('data-filter') || 'all';
        filterPublications();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      filterPublications();
    });
  }

  // Scrollspy: Highlight Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  function updateActiveNavLink() {
    let scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
});

// Copy to Clipboard utility
function copyEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.createElement('div');
    toast.textContent = 'Copied email to clipboard: ' + email;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.background = '#0e2a47';
    toast.style.color = '#ffffff';
    toast.style.padding = '10px 18px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    toast.style.zIndex = '9999';
    toast.style.fontSize = '0.85rem';
    toast.style.fontWeight = '600';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.5s ease';
      setTimeout(() => toast.remove(), 500);
    }, 2500);
  }).catch(err => {
    alert('Email: ' + email);
  });
}
