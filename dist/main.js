/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
const hamburger = document.querySelector('.hamburger');
const dropdownContainer = document.querySelector('.dropdown-container');

hamburger.addEventListener('click', function hamburgerClick() {
  hamburger.classList.add('flash');
  setTimeout(() => hamburger.classList.remove('flash'), 150);
  this.classList.toggle('is-active');
  dropdownContainer.classList.toggle('is-active');
});

const smallWindow = window.matchMedia('(max-width: 800px)');
const largeWindow = window.matchMedia('(min-width: 800px)');

function temporarilyHideDropdown() {
  dropdownContainer.classList.add('hide-mobile');
  setTimeout(() => dropdownContainer.classList.remove('hide-mobile'), 800);
}

function hideDropdownTransition(e) {
  if (e.matches) {
    temporarilyHideDropdown();
  }
}

function resetDropdown() {
  hamburger.classList.remove('is-active');
  dropdownContainer.classList.remove('is-active');
}

smallWindow.addEventListener('change', hideDropdownTransition);
largeWindow.addEventListener('change', resetDropdown);

temporarilyHideDropdown();

/******/ })()
;
//# sourceMappingURL=main.js.map