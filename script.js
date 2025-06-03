// Simple script to simulate the original site's behavior
console.log("Welcome to pandgey.site creation!");

// Add some interactive behavior
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 5px currentColor';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
});