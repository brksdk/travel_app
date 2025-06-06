# TravelApp Backend

The TravelApp Backend is a robust system powering the TravelApp, a train journey planning platform that calculates optimal routes and predicts train delays. Built with Python and Flask, it integrates machine learning for delay predictions, PostgreSQL for data storage, and Docker for containerized deployment. The backend comprises multiple modules for data retrieval, microservices, and API services to support the frontend.

## Overview
The backend is organized into three main modules:
- **Database Module**: Handles data retrieval and storage, including train schedules, delays, and station data, using scripts to fetch data from the Deutsche Bahn Timetables API and third-party sources.
- **Docker Module**: Contains two microservices:
  - **Delay Prediction (`vorhersage`)**: A Flask-based REST API that predicts train delays using Random Forest models, incorporating station, train, weather, and historical delay data.
  - **Route Planning (`routenplanung`)**: A Flask-based REST API that calculates optimal train routes, integrates delay predictions, and suggests alternativeJonny

System: alternative routes to minimize transfer risks.
- **Pycharm Module**: Includes scripts for populating station coordinates and a Flask-based API for user management, station data retrieval, and route planning integration.

## Features
- **Delay Prediction**: Uses machine learning to estimate delay durations and categorize them into ranges (e.g., "On time", "1-9 min").
- **Route Optimization**: Computes efficient train routes with alternatives based on predicted delays and transfer risks.
- **User Management**: Supports user registration, login, and admin functionalities via API endpoints.
- **Station Geolocation**: Retrieves and stores station coordinates for mapping and visualization.
- **Database Integration**: Uses PostgreSQL to store train schedules, delays, and user data.
- **Containerized Deployment**: Dockerized microservices for scalability and ease of deployment.
- **Data Retrieval**: Combines Deutsche Bahn API data with scraped timetable information for comprehensive route planning.

## Project Structure
```
travel_app/backend/
├── database/                   # Database-related scripts and documentation
│   ├── Verspätungsdaten.py    # Script for retrieving delay data
│   └── fahrplan_scraper.py    # Script for scraping timetable data
├── docker/                    # Docker configurations and microservices
│   ├── vorhersage/            # Delay prediction microservice
│   ├── routenplanung/         # Route planning microservice
│   └── docker-compose.yml     # Docker Compose configuration
├── pycharm/                   # Station data and user API module
│   ├── app.py                 # Flask API for user and station services
│   └── populate_stations.py   # Script to populate station coordinates
└── README.md                  # This file
```

## Prerequisites
- [Python](https://www.python.org/) (v3.10 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)
- [Git](https://git-scm.com/)
- [pip](https://pip.pypa.io/)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app/backend
   ```

2. Set up the PostgreSQL database:
   - Create a database named `postgres`.
   - Populate the required tables (`streckentabelle`, `wetterdaten_zukunft`, `sollfahrplan_reihenfolge`, `stations`, `users`, `sollstrecken`, `streckentabelle1103`) with data.
   - Update database connection details in the relevant scripts (default: `postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres`).

3. Follow the specific installation instructions for each module:
   - **Database**: Run data retrieval scripts (`Verspätungsdaten.py`, `fahrplan_scraper.py`) to populate the database.
   - **Docker**: Deploy microservices using Docker Compose (see `docker/README.md`).
   - **Pycharm**: Install dependencies and run `populate_stations.py` and `app.py` (see `pycharm/README.md`).

## Usage
1. Ensure the PostgreSQL database is running and populated.
2. Run the `populate_stations.py` script to populate station coordinates (one-time setup).
3. Deploy the microservices (`vorhersage` and `routenplanung`) using Docker Compose.
4. Start the Flask API server in the `pycharm` module for user and station services.
5. Interact with the APIs using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## Data Sources
- **Deutsche Bahn Timetables API**: Provides real-time train schedule and delay data (requires API Client ID and Key).
- **Timetable Scraper**: Extracts timetable data for long-distance (IC/ICE) trains from third-party websites.
- **Nominatim API**: Provides geolocation data for station coordinates.
- **Google Cloud PostgreSQL**: Stores train schedules, delay data, weather information, user data, and station coordinates.

## Contact
For questions or contributions, reach out:
- **GitHub:** [brksdk](https://github.com/brksdk)
