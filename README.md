## Task Management App

A full-stack Task Management application with a Django REST API backend and a vanilla HTML/CSS/JS frontend, deployed via Docker on Render. The backend uses JWT authentication and PostgreSQL as the database.

### Live Demo

- Backend API: https://task-manager-api-rk54.onrender.com(Use Postman for Testing)

- Frontend UI: https://my-frontend-cfgn.onrender.com


### Tech Stack

#### Backend:

- Python 3
- Django & Django REST Framework
- PostgreSQL
- Simple JWT for authentication
- Docker
- Render for deployment

#### Frontend:

- HTML
- CSS
- JavaScript (Vanilla)
- Hosted on Render (Static Site)

### API Endpoints
Method	            Endpoint	            Description	Auth Required
POST	           /api/register/	           Register new user	❌
POST	           /api/token/	             Login and get JWT tokens	❌
GET	             /api/tasks/	             List user tasks	✅
POST	           /api/tasks/	             Create new task	✅
PUT	             /api/tasks/<id>/	         Update a task	✅
DELETE	         /api/tasks/<id>/	         Delete a task	✅

### Setup Locally

#### 1. Clone the Repo

```
git clone https://github.com/hemantkumarlearning/Task_Manager_API.git
cd Task_Manager_API
```

#### 2. Backend

```
python -m venv env
env/Scripts/activate
pip install -r requirements.txt
cd backend
python manage.py migrate
python manage.py runserver
```
#### 3. Frontend

```
cd .
cd frontend
```
Just open the HTML files in the browser or serve with any static server (e.g., VS Code Live Server).

### License

This project is open-source and available under the MIT License.

### Acknowledgments

- Django & Django REST Framework
- Render.com
- PostgreSQL
- Simple JWT
