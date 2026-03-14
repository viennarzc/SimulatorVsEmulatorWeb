'use strict';

const buttons = document.querySelectorAll('.filter-btn');
const rows = document.querySelectorAll('#compTable tbody tr');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach((button) => button.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    rows.forEach((row) => {
      if (filter === 'all') {
        row.classList.remove('hidden');
      } else if (filter === 'diff' && row.dataset.type === 'sim') {
        row.classList.add('hidden');
      } else if (filter === 'sim' && row.dataset.type === 'diff') {
        row.classList.add('hidden');
      } else {
        row.classList.remove('hidden');
      }
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach((element) => {
  element.style.animationPlayState = 'paused';
  observer.observe(element);
});
