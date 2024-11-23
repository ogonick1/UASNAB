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
