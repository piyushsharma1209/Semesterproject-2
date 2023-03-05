const loginForm = document.querySelector('form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Your authentication logic here...

        window.location.href = 'index.html'; // Redirect to index page
    });
}
