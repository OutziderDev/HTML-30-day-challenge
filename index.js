import "./components/NavSidebar.js";

/* document.addEventListener('DOMContentLoaded', () = {
  const menuMovil = document.querySelector('.section-menu');
  menuMovil.addEventListener('click', () = {
    alert('hola');
  } )
}) */

document.addEventListener( 'DOMContentLoaded', () => {
  const menuMovil = document.querySelector('#btn-menu');
  const sidebarMenu = document.querySelector('#sidebar');

  /* sidebarMenu.addEventListener('click', () => {
    alert('lala')
  }) */

  menuMovil.addEventListener('click', (e) => {
    sidebarMenu.style.display= 'contents';
    sidebarMenu.style.zIndex= 90 
  } )
})