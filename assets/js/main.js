const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

const closeMenu = () => {
  navLinks?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
};

document.querySelectorAll('[data-scroll-target]').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-scroll-target');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const email = 'noblereadingroom@gmail.com';
const copyButton = document.querySelector('[data-copy-email]');
const copyMessage = document.getElementById('copyMessage');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    if (copyMessage) copyMessage.textContent = 'Email address copied: noblereadingroom@gmail.com';
  } catch (error) {
    if (copyMessage) copyMessage.textContent = 'Please copy this email address manually: noblereadingroom@gmail.com';
  }
});
