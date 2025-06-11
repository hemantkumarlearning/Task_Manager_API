const API_BASE = 'https://task-manager-api-rk54.onrender.com/api';
const token = localStorage.getItem('accessToken');

// Redirect to login if token is missing
if (!token) {
    window.location.href = 'login.html';
}

// Submit task form: Create or Update
document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('task-id').value;
    const title = document.getElementById('task-title').value.trim();
    const description = document.getElementById('task-desc').value.trim();
    const completed = document.getElementById('task-completed').checked;

    if (!title || !description) {
        alert("Title and description are required.");
        return;
    }

    const data = { title, description, completed };

    const method = id ? 'PUT' : 'POST';
    const endpoint = id ? `${API_BASE}/tasks/${id}/` : `${API_BASE}/tasks/`;

    try {
        const res = await fetch(endpoint, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            alert(id ? 'Task updated!' : 'Task created!');
            document.getElementById('task-form').reset();
            document.getElementById('task-id').value = '';
            loadTasks();
        } else {
            const errorData = await res.json();
            alert(`Error: ${errorData.detail || 'Failed to save task.'}`);
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('Network error. Please try again.');
    }
});

// Load tasks for current user
async function loadTasks() {
    try {
        const res = await fetch(`${API_BASE}/tasks/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!res.ok) throw new Error('Unauthorized');

        const tasks = await res.json();
        const list = document.getElementById('task-list');
        list.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${task.title}</strong> - ${task.completed ? '✅' : '❌'}<br>
                <em>${task.description}</em><br>
                <small>Created: ${new Date(task.created_at).toLocaleString()}</small><br>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            `;

            const editBtn = li.querySelector('.edit-btn');
            const deleteBtn = li.querySelector('.delete-btn');

            editBtn.addEventListener('click', () => {
                editTask(task.id, task.title, task.description, task.completed);
            });

            deleteBtn.addEventListener('click', () => {
                deleteTask(task.id);
            });
            list.appendChild(li);
        });

    } catch (error) {
        console.error('Error loading tasks:', error);
        alert('Failed to load tasks. Please log in again.');
        localStorage.removeItem('accessToken');
        window.location.href = 'login.html';
    }
}

// Fill form for editing a task
function editTask(id, title, description, completed) {
    document.getElementById('task-id').value = id;
    document.getElementById('task-title').value = title;
    document.getElementById('task-desc').value = description;
    document.getElementById('task-completed').checked = completed;
}

// Delete a task
async function deleteTask(id) {
    if (!confirm("Are you sure you want to delete this task?")) return;

    try {
        const res = await fetch(`${API_BASE}/tasks/${id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (res.ok) {
            alert('Task deleted!');
            loadTasks();
        } else {
            alert('Failed to delete task.');
        }
    } catch (error) {
        console.error('Delete error:', error);
        alert('Network error. Please try again.');
    }
}

// Logout function
function logout() {
    localStorage.removeItem('accessToken');
    window.location.href = 'login.html';
}

// Load tasks on page load
loadTasks();
