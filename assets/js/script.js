window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const content = document.getElementById('contenido');
    const offsetTop = content.getBoundingClientRect().top;

    if (offsetTop <= 0) {
      navbar.style.backgroundColor = '#000000dd';
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
});