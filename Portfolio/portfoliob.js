const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const closeBtn = document.querySelector('.mobile-nav-active');
  const header = document.querySelector('#header');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    header.classList.add('mobile-nav-active');
    body.classList.add('mobile-nav-active');
  });

  closeBtn.addEventListener('click', () => {
    header.classList.remove('mobile-nav-active');
    body.classList.remove('mobile-nav-active');
  });