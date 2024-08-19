// assets/js/navigation.js

document.addEventListener('DOMContentLoaded', function () {
    // Handle active link highlighting in the navbar
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Example of a feature to hide/show content
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.dataset.target;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.classList.toggle('d-none'); // Toggle visibility by adding/removing 'd-none' class
            }
        });
    });
});
