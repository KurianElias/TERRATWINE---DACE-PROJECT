document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const getOtpButton = document.getElementById('get-otp');
    const otpInput = document.getElementById('otp');

    if (getOtpButton) {
        getOtpButton.addEventListener('click', function() {
            // Simulate sending OTP
            alert('OTP sent! Use 5555 as the OTP.');
            otpInput.disabled = false;
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Validate the form
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const otp = document.getElementById('otp').value;
            const password = document.getElementById('password').value;

            if (otp !== '5555') {
                alert('Invalid OTP');
                return;
            }

            // Store the user data in localStorage
            localStorage.setItem('registeredUser', JSON.stringify({ name, phone, password }));

            // Redirect to login.html
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Validate the form
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;

            // Retrieve the registered user data from localStorage
            const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

            // Check if the entered phone and password match the registered user
            if (registeredUser && phone === registeredUser.phone && password === registeredUser.password) {
                // Redirect to welcome.html
                window.location.href = 'welcome.html';
            } else {
                alert('Invalid phone number or password');
            }
        });
    }
});
