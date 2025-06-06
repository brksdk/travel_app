# TravelApp

TravelApp is a comprehensive train journey planning platform for Germany, offering real-time route planning, machine learning-based delay predictions, and city exploration features. It combines a **Vue.js-based frontend** for an interactive user interface with a **Python Flask-based backend** for data processing, API services, and microservices. The backend leverages PostgreSQL for data storage, Docker for containerized deployment, and external APIs (Deutsche Bahn Timetables, OpenWeatherMap, Nominatim) for enriched functionality.

## Project Overview
TravelApp enables users to plan train journeys with optimized routes, view predicted delays, and explore German cities with weather and attraction information. It supports user authentication, multilingual interfaces (English and German), and an admin panel for user management. The backend processes train schedules, station coordinates, and delay predictions, while the frontend provides a responsive UI with interactive maps and animated visualizations.

### Key Features
- **Route Planning**: Search for train routes with schedules, transfers, and alternative routes to minimize delays.
- **Delay Prediction**: Uses Random Forest models to predict train delays based on historical data, weather, and station information.
- **City Exploration**: Displays attractions and real-time weather for cities like Berlin and München.
- **User Management**: Supports registration, login, and admin functionalities (restricted to user ID=1).
- **Interactive Maps**: Visualizes routes with animated train movements using Leaflet.
- **Multilingual Support**: Offers English and German interfaces with seamless language switching.
- **Data Integration**: Combines Deutsche Bahn API, scraped timetables, and geolocation data for comprehensive journey planning.

##  All READMEs in Project
```
travel_app/
├── backend/                    # Backend codebase (Flask, PostgreSQL, Docker)
│   ├── database/               # Data retrieval scripts
│   │   └── README.md           # Database module documentation
│   ├── docker/                 # Microservices and Docker configurations
│   │   ├── vorhersage/         # Delay prediction microservice
│   │   │   └── README.md       # Delay prediction documentation
│   │   ├── routenplanung/      # Route planning microservice
│   │   │   └── README.md       # Route planning documentation
│   │   ├── docker-compose.yml  # Docker Compose configuration
│   │   └── README.md           # Docker module documentation
│   ├── pycharm/                # Station data and user API module
│   │   └── README.md           # Pycharm module documentation
│   └── README.md               # Backend overview documentation
├── frontend/                   # Frontend codebase (Vue.js)
│   ├── vue_frontend/           # Vue.js project
│   │   ├── src/                # Source code (App.vue, views, assets)
│   │   └── README.md           # Frontend documentation
└── README.md                   # This file (project overview)
```

## Prerequisites
- [Python](https://www.python.org/) (v3.10 or higher) for backend
- [Node.js](https://nodejs.org/) (v16 or higher) and [npm](https://www.npmjs.com/) for frontend
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [Docker](https://www.docker.com/) (optional, for backend microservices)
- [Git](https://git-scm.com/)
- API keys for:
  - [Deutsche Bahn Timetables API](https://developer.deutschebahn.com/) (backend)
  - [OpenWeatherMap](https://openweathermap.org/) (frontend)
  - [Nominatim API](https://nominatim.openstreetmap.org/) (backend)

## Installation Overview
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app
   ```

2. **Set Up the Backend**:
   - Navigate to `backend` and follow [backend/README.md](./backend/README.md).
   - Install Python dependencies, set up the PostgreSQL database, and run data population scripts.
   - Deploy microservices using Docker Compose (see [backend/docker/README.md](./backend/docker/README.md)).
   - Populate station coordinates using `backend/pycharm/populate_stations.py` (see [backend/pycharm/README.md](./backend/pycharm/README.md)).
   - Run data retrieval scripts for train schedules and delays (see [backend/database/README.md](./backend/database/README.md)).
   - Start the Flask API server at `http://127.0.0.1:5000`.

3. **Set Up the Frontend**:
   - Navigate to `frontend/vue_frontend` and follow [frontend/vue_frontend/README.md](./frontend/vue_frontend/README.md).
   - Install Node.js dependencies and run the Vue.js development server at `http://localhost:8080`.

4. **Configure Environment**:
   - Ensure the backend API is running at `http://127.0.0.1:5000`.
   - Verify database connectivity and API key configurations.
   - Ensure `station_departure.pkl` and model files (`model.pkl`, `classifier.pkl`, etc.) are generated.

5. **Run the Application**:
   - Access the app at `http://localhost:8080` in your browser.
   - Use the frontend to search routes, explore cities, or manage users.

## Usage
- **Route Planning**: Enter departure and arrival stations, date, and time on the home page to view routes with predicted delays and alternatives.
- **City Exploration**: Navigate to city pages (e.g., `/city/Berlin`) to explore attractions and weather.
- **User Authentication**: Register or log in to access personalized features; use admin credentials (ID=1) for the admin panel.
- **Admin Panel**: List and delete users via the admin panel at `/adminpanel`.
- **Map Visualization**: Use the route map page (`/wohin`) to see animated train routes on an interactive map.

## Module Documentation
- **Backend Overview**: General backend architecture and setup instructions ([backend/README.md](./backend/README.md)).
- **Database Module**: Details on data retrieval and timetable scraping using Deutsche Bahn API and third-party sources ([backend/database/README.md](./backend/database/README.md)).
- **Docker Module**: Instructions for deploying delay prediction and route planning microservices with Docker Compose ([backend/docker/README.md](./backend/docker/README.md)).
  - **Delay Prediction Microservice**: Random Forest-based delay predictions ([backend/docker/vorhersage/README.md](./backend/docker/vorhersage/README.md)).
  - **Route Planning Microservice**: Optimal route calculations with alternative route suggestions ([backend/docker/routenplanung/README.md](./backend/docker/routenplanung/README.md)).
- **Pycharm Module**: Station coordinate population and user/station API services ([backend/pycharm/README.md](./backend/pycharm/README.md)).
- **Frontend**: Vue.js-based UI setup and component details ([frontend/vue_frontend/README.md](./frontend/vue_frontend/README.md)).

## Dependencies
- **Backend**:
  - Python libraries: `flask`, `flask-cors`, `flask-sqlalchemy`, `psycopg2-binary`, `bcrypt`, `requests`, `scikit-learn`, `pandas`
  - External APIs: Deutsche Bahn Timetables, Nominatim
  - Database: PostgreSQL
  - Tools: Docker (for microservices)
- **Frontend**:
  - Node modules: `vue@3.x`, `vue-router@4.x`, `vue-i18n@9.x`, `axios`, `vue-leaflet@0.10.1`, `leaflet@1.9.4`
  - External APIs: OpenWeatherMap
  - Assets: Images for backgrounds, flags, and map icons

## Notes
- Ensure the backend API and microservices (`vorhersage` at `http://127.0.0.1:5002`, `routenplanung` at `http://127.0.0.1:5001`) are running before starting the frontend.
- Replace the OpenWeatherMap API key in `frontend/vue_frontend/src/views/City.vue` with a personal key for production.
- The admin panel is restricted to the user with ID=1 for security.
- Station coordinates must be populated using `backend/pycharm/populate_stations.py` before route planning and mapping features work correctly.
- Data retrieval scripts (`Verspätungsdaten.py`, `fahrplan_scraper.py`) should be scheduled to keep the database updated.

## Contact
For questions or contributions, reach out:
- **GitHub:** [brksdk](https://github.com/brksdk)
