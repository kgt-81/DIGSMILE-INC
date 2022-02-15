




$(function () {

  let hamburger_menu = document.getElementById('hamburger-menu');
  let nav_wrapper = document.getElementById('nav-wrapper');

  const menu_link = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < menu_link.length; i++) {
  menu_link[i].addEventListener('click',function(e){
    e.preventDefault();
    let href = menu_link[i].getAttribute('href');
    let target = document.getElementById(href.replace('#', ''));
    const rect = target.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const position = rect + offset;
    hamburger_menu.classList.remove('open');
    nav_wrapper.classList.remove('show');
    $('.nav-bg').stop(true,true).fadeOut();
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.removeEventListener('mousewheel', disableScroll, { passive: false });
    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  });
}

  function disableScroll(event) {
    event.preventDefault();
  }
  
  hamburger_menu.addEventListener('click', function(e){
    e.preventDefault();
    if (hamburger_menu.classList.contains('open')) {
      hamburger_menu.classList.remove('open');
      nav_wrapper.classList.remove('show');
      $('.nav-bg').stop(true,true).fadeOut();
      document.removeEventListener('touchmove', disableScroll, { passive: false });
      document.removeEventListener('mousewheel', disableScroll, { passive: false });
    } else {
      hamburger_menu.classList.add('open');
      nav_wrapper.classList.add('show');
      $('.nav-bg').stop(true,true).fadeIn();
      document.addEventListener('touchmove', disableScroll, { passive: false });
      document.addEventListener('mousewheel', disableScroll, { passive: false });
    }
  });
  
});