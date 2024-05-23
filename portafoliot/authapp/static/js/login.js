document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        if (!username || !password) {
            event.preventDefault();
            errorMessage.textContent = 'Todos los campos son obligatorios.';
            errorMessage.style.display = 'block';
            return;
        } 

        if (password.length < 6) {
            event.preventDefault();
            errorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            errorMessage.style.display = 'block';
            return;
        }

        errorMessage.style.display = 'none';
    });
});
