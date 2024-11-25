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


//// Знаходимо бургер-кнопку і меню
//const burger = document.querySelector('.burger');
//const menu = document.querySelector('.header__menu');

//// Додаємо обробник кліку
//burger.addEventListener('click', () => {
//  burger.classList.toggle('active');
//  menu.classList.toggle('open');
//});

// Знаходимо елементи
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

// Обробник кліку на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('open');
  body.classList.toggle('lock-scroll');
});

// Субменю для мобільних
const dropdowns = document.querySelectorAll('.header__nav-item .dropdown-menu');
dropdowns.forEach((dropdown) => {
  const parentLink = dropdown.previousElementSibling;

  parentLink.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('open');
  });
});

