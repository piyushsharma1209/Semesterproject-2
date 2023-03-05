const registerForm = document.querySelector('form');

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const confirmpassword = document.querySelector('#password').value;

        // Your authentication logic here...

        window.location.href = 'index.html'; // Redirect to index page
    });
}
