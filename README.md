## Task Management App

A full-stack Task Management application with a Django REST API backend and a vanilla HTML/CSS/JS frontend, deployed via Docker on Render. The backend uses JWT authentication and PostgreSQL as the database.

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
