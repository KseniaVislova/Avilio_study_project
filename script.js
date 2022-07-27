let x = document.getElementById('contain');

function openMenu() {
  let navbar = document.getElementById('navbar');
  navbar.classList.toggle('open');

  x.classList.toggle('change');
}

x.addEventListener('click', openMenu);
