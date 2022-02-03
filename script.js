'use strict';
const humberger_menu = document.getElementById('humberger-menu');
humberger_menu.addEventListener('click',function (e) {
  e.preventDefault();
  if (this.classList.contains('open')) {
    this.classList.remove('open');
  }else{
    this.classList.add('open');
  }
});