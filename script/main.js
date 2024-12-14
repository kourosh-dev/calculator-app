// ------------- toggle theme --------------
// get elements
// body elm
const bodyElm = document.getElementById('js-body');
// headre elment
const h1Elm = document.getElementById('js-h1');
const labelThemeElm = document.getElementById('js-label-theme');
const themeBtnElm = document.getElementById('js-theme-button');
const btnThemeInnerElm = document.getElementById('js-button-theme-inner');
// screen elemnt
const displayElm = document.getElementById('js-display');
// keypad elements
const keypadElm = document.getElementById('js-keypad');
const operationElm = document.querySelectorAll('.js-operation-key');
const shadowKeyElms = document.querySelectorAll('.js-shadow-key');
const deleteKeyElm = document.getElementById('js-delete-key');
const resetKeyElm = document.getElementById('js-reset-key')
const shadowKeyBlueElms = document.querySelectorAll('.js-shadow-key-blue');
const equalElm = document.getElementById('js-equal-key');
const shadowKeyRedElm = document.getElementById('js-shadow-key-red');

// dark button elment
const blackBtn = document.getElementById('js-black-theme');
blackBtn.addEventListener('click', () => {
  // adding dark theme style to whole page
  // move toggle theme button
  btnThemeInnerElm.style.transform = 'translateX(0)';
  // changing style of body element
  bodyElm.style.backgroundColor = 'var(--very-dark-main)';
  bodyElm.style.color = 'var(--white)';
  // changing style of header elements
  themeBtnElm.style.backgroundColor = 'var(--very-dark-toggle-keypad)';
  btnThemeInnerElm.style.backgroundColor = 'var(--red)';
  // changing style of screen
  displayElm.style.backgroundColor = 'var(--very-dark-screen)';
  displayElm.style.color = 'var(--white)';
  // changing style of keypad elements
  keypadElm.style.backgroundColor = 'var(--very-dark-toggle-keypad)';
  operationElm.forEach(elm => {
    elm.style.backgroundColor = 'var(--light-grayish-orange)';
  });
  shadowKeyElms.forEach(elm => {
    elm.style.backgroundColor = 'var(--grayish-orange)';
  });
  resetKeyElm.style.backgroundColor = 'var(--dark-blue-key)';
  deleteKeyElm.style.backgroundColor = 'var(--dark-blue-key)';
  shadowKeyBlueElms.forEach(elm => {
    elm.style.backgroundColor = 'var(--dark-blue-shadow-key)';
  });
  equalElm.style.backgroundColor = 'var(--red)';
  shadowKeyRedElm.style.backgroundColor = 'var(--dark-red)';
});

// light button elmente
const lightBtn = document.getElementById('js-light-theme');
lightBtn.addEventListener('click', () => {
  // adding light theme style to whole page
  // move toggle theme button
  btnThemeInnerElm.style.transform = 'translateX(157%)';
  // changing style of body element
  bodyElm.style.backgroundColor = 'var(--light-gray)';
  bodyElm.style.color = 'var(--very-dark-grayish-yellow)';
  // changing style of header elements
  themeBtnElm.style.backgroundColor = 'var(--grayish-red)';
  btnThemeInnerElm.style.backgroundColor = 'var(--orange)';
  // changing style of screen
  displayElm.style.backgroundColor = 'var(--very-light-gray)';
  displayElm.style.color = 'var(--very-dark-grayish-yellow)';
  // changing style of keypad elements
  keypadElm.style.backgroundColor = 'var(--grayish-red)';
  operationElm.forEach(elm => {
    elm.style.backgroundColor = 'var(--light-grayish-yellow)';
  });
  shadowKeyElms.forEach(elm => {
    elm.style.backgroundColor = 'var(--dark-grayish-orange)';
  });
  resetKeyElm.style.backgroundColor = 'var(--dark-moderate-cyan)';
  deleteKeyElm.style.backgroundColor = 'var(--dark-moderate-cyan)';
  shadowKeyBlueElms.forEach(elm => {
    elm.style.backgroundColor = 'var(--very-dark-cyan)';
  });
  equalElm.style.backgroundColor = 'var(--orange)';
  shadowKeyRedElm.style.backgroundColor = 'var(--dark-orange)';
});

// --------------- calculate -----------------
