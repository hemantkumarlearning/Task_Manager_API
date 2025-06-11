const API_BASE = 'https://task-manager-api-rk54.onrender.com/api';

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const res = await fetch(`${API_BASE}/token/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok && data.access) {
        localStorage.setItem('accessToken', data.access);
        window.location.href = 'tasks.html';
    } else {
        alert('Login failed');
    }
});
