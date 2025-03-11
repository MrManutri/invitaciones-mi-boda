window.addEventListener('scroll', function() {
    const ramas = document.querySelector('.ramas');
    const scrollPosition = window.scrollY;

    ramas.style.opacity = 1 - scrollPosition / 300;
    ramas.style.top = `-${20 + scrollPosition / 10}%`; // Ajusta el valor según sea necesario
});