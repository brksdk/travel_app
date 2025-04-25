FROM python:3.11-slim
WORKDIR /app
RUN pip install flask flask-sqlalchemy psycopg2-binary flask-cors bcrypt pandas requests
COPY app.py .
EXPOSE 5000
CMD ["python", "app.py"]