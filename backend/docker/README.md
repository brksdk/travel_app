# TravelApp Dockerized Microservices

This directory contains the Docker configurations and source code for the TravelApp backend's two primary microservices: **Delay Prediction (`vorhersage`)** and **Route Planning (`routenplanung`)**. These microservices are containerized using Docker and orchestrated with Docker Compose for seamless deployment and scalability.

## Microservices
- **Delay Prediction Microservice (`vorhersage`)**:
  - **Purpose**: Predicts train delays using Random Forest models, integrating station, train, weather, and historical delay data from a PostgreSQL database.
  - **API Endpoint**: `POST /predict` (predicts delay durations and categories).
  - **Key Files**: `predict_app.py`, `training2.py`, `model.pkl`, `classifier.pkl`, `encoders.pkl`, `class_mapping.pkl`.
  - **Port**: `5002`.

- **Route Planning Microservice (`routenplanung`)**:
  - **Purpose**: Calculates optimal train routes, integrates delay predictions, and suggests alternative routes to minimize transfer risks.
  - **API Endpoints**: `GET /route` (calculates routes), `POST /api/analyse_and_replan` (analyzes routes and suggests alternatives).
  - **Key Files**: `flaskapp.py`, `routen_berechnung.py`, `replan.py`, `station_departure.pkl`.
  - **Port**: `5001`.

## Docker Compose Configuration
The `docker-compose.yml` file orchestrates the deployment of both microservices, ensuring they run in a shared network and can communicate with each other and the PostgreSQL database.
