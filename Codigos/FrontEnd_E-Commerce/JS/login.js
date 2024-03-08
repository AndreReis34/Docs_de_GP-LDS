    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailError.textContent = 'E-mail inválido';
        } else {
            emailError.textContent = '';
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordRegex.test(passwordInput.value)) {
            isValid = false;
            passwordError.textContent = 'Senha inválida. Deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.';
        } else {
            passwordError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault();
        }
    });