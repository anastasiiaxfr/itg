let navbar_toggle = document.querySelector('.navbar-toggler');
let navbar_toggle_open = document.querySelector('.navbar-toggler-open');
let navbar_toggle_close = document.querySelector('.navbar-toggler-close');

navbar_toggle.addEventListener('click', function(){
  navbar_toggle_close.classList.toggle('d-block')
  navbar_toggle_open.classList.toggle('d-none')
})