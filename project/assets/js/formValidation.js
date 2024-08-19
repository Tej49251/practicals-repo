// assets/js/formValidation.js

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;

            // Example validation for email and password fields
            const emailField = form.querySelector('#email');
            const passwordField = form.querySelector('#password');

            if (emailField && !validateEmail(emailField.value)) {
                isValid = false;
                alert('Please enter a valid email address.');
            }

            if (passwordField && passwordField.value.length < 6) {
                isValid = false;
                alert('Password must be at least 6 characters long.');
            }

            if (isValid) {
                form.submit();  // Submit the form if all validations pass
            }
        });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
