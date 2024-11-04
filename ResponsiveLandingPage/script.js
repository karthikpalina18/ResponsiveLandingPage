// Get the navbar element
const navbar = document.getElementById('navbar');

// Add an event listener for the scroll event
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
