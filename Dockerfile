# Use official image
FROM python:3.11-slim

WORKDIR /app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY backend/ ./backend/

WORKDIR /app/backend

CMD sh -c "python manage.py makemigrations && python manage.py migrate && gunicorn backend.wsgi:application --bind 0.0.0.0:8000"
