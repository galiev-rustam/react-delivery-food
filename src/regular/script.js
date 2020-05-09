console.log(1);

const cart_button = document.querySelector('.cart-button');
const modal = document.querySelector('.modal');
const b_close = document.querySelector('.close');


cart_button.addEventListener('click', () => {
  modal.classList.add('is-open');
});

b_close.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

new WOW().init();