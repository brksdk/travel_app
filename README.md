# TravelApp

TravelApp is a comprehensive train journey planning platform designed for users in Germany, combining real-time route planning, delay predictions, and city exploration features. Built with a modular architecture, it integrates a **Vue.js-based frontend** for an interactive user experience and a **Python Flask-based backend** for data processing, machine learning, and API services. The project leverages PostgreSQL for data storage, Docker for microservices, and external APIs like Deutsche Bahn Timetables, OpenWeatherMap, and Nominatim for enriched functionality.

## Project Overview
TravelApp enables users to plan train journeys with optimized routes, view predicted delays using machine learning, and explore popular German cities with weather and attraction information. It supports user authentication, multilingual interfaces (English and German), and an admin panel for user management. The backend processes train schedules, station coordinates, and delay predictions, while the frontend provides a responsive UI with interactive maps and animated visualizations.

### Key Features
- **Route Planning**: Search for train routes with detailed schedules, transfer information, and alternative routes to minimize delays.
- **Delay Prediction**: Uses Random Forest models to predict train delays based on historical data, weather, and station information.
- **City Exploration**: Displays attractions and real-time weather for cities like Berlin and München.
- **User Management**: Supports registration, login, and admin functionalities (restricted to user ID=1).
- **Interactive Maps**: Visualizes routes with animated train movements using Leaflet.
- **Multilingual Support**: Offers English and German interfaces with seamless language switching.
- **Data Integration**: Combines Deutsche Bahn API, scraped timetables, and geolocation data for comprehensive journey planning.

## Project Structure
```
travel_app/
├── backend/                    # Backend codebase (Flask, PostgreSQL, Docker)
│   ├── database/               # Data retrieval scripts
│   ├── docker/                 # Microservices (route planning, delay prediction)
│   ├── pycharm/                # Station coordinate population and user API
│   └── README.md               # Backend-specific documentation
├── frontend/                   # Frontend codebase (Vue.js)
│   ├── vue_frontend/           # Vue.js project
│   │   ├── src/                # Source code (App.vue, views, assets)
│   │   └── README.md           # Frontend-specific documentation
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

## Installation Overview
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app
   ```

2. **Set Up the Backend**:
   - Navigate to `backend` and follow the instructions in [backend/README.md](./backend/README.md).
   - Install Python dependencies, set up the PostgreSQL database, and run data population scripts.
   - Deploy microservices using Docker Compose (optional).
   - Start the Flask API server at `http://127.0.0.1:5000`.

3. **Set Up the Frontend**:
   - Navigate to `frontend/vue_frontend` and follow the instructions in [frontend/vue_frontend/README.md](./frontend/vue_frontend/README.md).
   - Install Node.js dependencies and run the Vue.js development server at `http://localhost:8080`.

4. **Configure Environment**:
   - Ensure the backend API is running at `http://127.0.0.1:5000`.
   - Verify database connectivity and API key configurations.
   - Populate station coordinates using `backend/pycharm/populate_stations.py`.

5. **Run the Application**:
   - Access the app at `http://localhost:8080` in your browser.
   - Use the frontend to search routes, explore cities, or manage users.

## Usage
- **Route Planning**: Enter departure and arrival stations, date, and time on the home page to view routes with predicted delays and alternatives.
- **City Exploration**: Navigate to city pages (e.g., `/city/Berlin`) to explore attractions and weather.
- **User Authentication**: Register or log in to access personalized features; use admin credentials (ID=1) for the admin panel.
- **Admin Panel**: List and delete users via the admin panel at `/adminpanel`.
- **Map Visualization**: Use the route map page (`/wohin`) to see animated train routes on an interactive map.

## Detailed Documentation
- **Backend**: For details on Flask APIs, microservices, and data processing, see [backend/README.md](./backend/README.md).
- **Frontend**: For Vue.js setup, components, and UI features, see [frontend/vue_frontend/README.md](./frontend/vue_frontend/README.md).

## Dependencies
- **Backend**:
  - Python libraries: `flask`, `flask-cors`, `flask-sqlalchemy`, `psycopg2-binary`, `bcrypt`, `requests`
  - External APIs: Deutsche Bahn Timetables, Nominatim
  - Database: PostgreSQL
  - Tools: Docker (for microservices)
- **Frontend**:
  - Node modules: `vue@3.x`, `vue-router@4.x`, `vue-i18n@9.x`, `axios`, `vue-leaflet@0.10.1`, `leaflet@1.9.4`
  - External APIs: OpenWeatherMap
  - Assets: Images for backgrounds, flags, and map icons

## Notes
- Ensure the backend is running before starting the frontend, as the frontend depends on backend APIs.
- Replace the OpenWeatherMap API key in `frontend/vue_frontend/src/views/City.vue` with a personal key for production.
- The admin panel is restricted to the user with ID=1 for security.
- Station coordinates must be populated using the backend script before route planning features work correctly.

## Contact
For questions or contributions, reach out:
- **GitHub:** [brksdk](https://github.com/brksdk)
