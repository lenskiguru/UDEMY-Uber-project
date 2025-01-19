document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu-mobile');
  
    if (burger && menu) {
      burger.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    }
  });
  