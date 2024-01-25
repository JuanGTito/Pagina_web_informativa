const header = document.querySelector("header");
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('open');

  menuIcon.querySelector('.icon-bars');
  menuIcon.querySelector('.icon-close');
};

window.addEventListener('scroll', function () {
  navbar.classList.remove('active');
  menuIcon.classList.remove('open');
   const iconBars = menuIcon.querySelector('.icon-bars');
  const iconClose = menuIcon.querySelector('.icon-close');
  iconBars.style.display = 'inline-block';
  iconClose.style.display = 'none';
});

const sr = ScrollReveal({
  distance: '0px',
  duration: 2500,
  reset: true
});

sr.reveal('.Nosotros,.Servicios,.Productos-S,.Contacto', {delay:200, origin:'buttom'})
