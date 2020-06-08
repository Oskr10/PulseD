var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e){
  nav.classList.toggle('hide-mobile');
  e.preventDefault();
});
exit.addEventListener('click', function(e){
  nav.classList.add('hide-mobile');
  e.preventDefault();
});


var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click', function(){
  overlay.classList.add('show-menu');
});
document.getElementById('close-menu').addEventListener('click', function(){
  overlay.classList.remove('show-menu');
});
