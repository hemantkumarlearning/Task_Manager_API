const API_BASE = 'https://task-manager-api-rk54.onrender.com/api';

document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    const res = await fetch(`${API_BASE}/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (res.ok) {
        alert('Registered successfully! You can now log in.');
        window.location.href = 'login.html';
    } else {
        alert('Registration failed');
    }
});
