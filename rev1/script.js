document.getElementById('name').addEventListener('input', function() {
    const nameInput = this;
    const nameMessage = document.getElementById('nameMessage');
    
    if (nameInput.value.trim().length > 0) {
        nameInput.classList.add('valid');
        nameInput.classList.remove('invalid');
        nameMessage.textContent = '';
    } else {
        nameInput.classList.remove('valid');
        nameInput.classList.add('invalid');
        nameMessage.textContent = 'Name cannot be empty.';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailInput = this;
    const emailMessage = document.getElementById('emailMessage');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput.value)) {
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        emailMessage.textContent = '';
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        emailMessage.textContent = 'Please enter a valid email address.';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const passwordInput = this;
    const passwordMessage = document.getElementById('passwordMessage');
    
    if (passwordInput.value.length >= 6) {
        passwordInput.classList.add('valid');
        passwordInput.classList.remove('invalid');
        passwordMessage.textContent = '';
    } else {
        passwordInput.classList.remove('valid');
        passwordInput.classList.add('invalid');
        passwordMessage.textContent = 'Password must be at least 6 characters long.';
    }
});