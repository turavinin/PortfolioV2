// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
const hamBtn = document.querySelector('.hamburger');
const hdrText = document.querySelector('.header__text');
const header = document.querySelector('.header');
const navBarItem = document.querySelectorAll('.navbar__item');

hamBtn.addEventListener('click', () => {
  hdrText.classList.toggle('change');
  header.classList.toggle('change');
});

navBarItem.forEach((e) =>
  e.addEventListener('click', () => {
    hdrText.classList.remove('change');
    header.classList.remove('change');
  })
);
