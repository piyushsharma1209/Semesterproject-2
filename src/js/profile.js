const token = localStorage.getItem('token');

if (!token) {
    window.location.replace('login.html');
}

fetch('https://example.com/api/profile', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
})
    .then(response => response.json())
    .then(data => {
        const nameElement = document.getElementById('name');
        const emailElement = document.getElementById('email');
        const phoneElement = document.getElementById('phone');
        const addressElement = document.getElementById('address');

        nameElement.textContent = data.name;
        emailElement.textContent = data.email;
        phoneElement.textContent = data.phone;
        addressElement.textContent = data.address;
    })
    .catch(error => {
        console.error('Error:', error);
    });
