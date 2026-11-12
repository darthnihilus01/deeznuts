const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('[data-status]').forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.status !== button.dataset.filter;
  });
}));
