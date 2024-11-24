document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    // Закриття інших активних блоків
    document.querySelectorAll('.accordion-header').forEach(item => {
      if (item !== button && item.classList.contains('active')) {
        item.classList.remove('active');
        item.nextElementSibling.style.maxHeight = null;
      }
    });

    // Тумблер для поточного блоку
    button.classList.toggle('active');

    if (button.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});


document.querySelectorAll('.header__nav-item > a').forEach(link => {
  link.addEventListener('click', event => {
    const menu = link.nextElementSibling;
    if (menu && menu.classList.contains('dropdown-menu')) {
      event.preventDefault();
      menu.classList.toggle('open');
      link.querySelector('.arrow').classList.toggle('rotate');
    }
  });
});

// Закриття меню при кліку поза ним
document.addEventListener('click', event => {
  if (!event.target.closest('.header__nav-item')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('open');
    });
    document.querySelectorAll('.arrow').forEach(arrow => {
      arrow.classList.remove('rotate');
    });
  }
});
