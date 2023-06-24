const submenupica = document.querySelectorAll('.submenu-trigger');
const submenus = document.querySelectorAll('.submenu');

submenupica.forEach(trigger => {
  trigger.addEventListener('mouseover', () => {
    const submenu = trigger.nextElementSibling;
    submenu.classList.add('active');
  });

  trigger.addEventListener('mouseout', () => {
    const submenu = trigger.nextElementSibling;
    submenu.classList.remove('active');
  });
});

submenus.forEach(submenu => {
  submenu.addEventListener('mouseover', () => {
    submenu.classList.add('active');
  });

  submenu.addEventListener('mouseout', () => {
    submenu.classList.remove('active');
  });
});


