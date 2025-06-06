# TravelApp Backend

The TravelApp Backend is a collection of microservices designed to power the TravelApp, a train journey planning system focused on calculating optimal routes and predicting train delays. Built with Python and Flask, the backend integrates with a PostgreSQL database and leverages machine learning for accurate delay predictions. The system is containerized using Docker for scalability and ease of deployment.

## Overview
The backend consists of two primary microservices:
- **Delay Prediction Microservice (`vorhersage`)**: A Flask-based REST API that predicts train delays using Random Forest models, incorporating features like station data, train schedules, weather, and historical delays.
- **Route Planning Microservice (`routenplanung`)**: A Flask-based REST API that calculates optimal train routes, integrates delay predictions, and suggests alternative routes to minimize transfer risks.

Both microservices are deployed as Docker containers and communicate with a shared PostgreSQL database hosted on Google Cloud. The system retrieves timetable and delay data via the Deutsche Bahn Timetables API and supplements it with scraped timetable data for long-distance (IC/ICE) trains.

## Features
- **Delay Prediction**: Estimates delay durations and categorizes them_wifi

System: them into ranges (e.g., "On time", "1-9 min") using machine learning.
- **Route Optimization**: Computes efficient routes with alternatives based on predicted delays and transfer risks.
- **Database Integration**: Uses PostgreSQL for structured storage of train schedules and delay data.
- **Containerized Deployment**: Dockerized microservices for easy scaling and deployment.
- **Data Retrieval**: Combines Deutsche Bahn API data with scraped timetable information.

## Project Structure
```
travel_app/backend/
├── database/                   # Database-related scripts and documentation
│   └── Verspätungsdaten.py    # Script for retrieving delay data
│   └── fahrplan_scraper.py    # Script for scraping timetable data
├── docker/                    # Docker configurations and microservices
│   ├── vorhersage/            # Delay prediction microservice
│   └── routenplanung/         # Route planning microservice
│   └── docker-compose.yml     # Docker Compose configuration
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
   - Populate the required tables (`streckentabelle`, `wetterdaten_zukunft`, `sollfahrplan_reihenfolge`) with data.
   - Update database connection details in the microservice scripts (default: `postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres`).

3. Follow the specific installation instructions for each microservice in the `docker/vorhersage` and `docker/routenplanung` directories.

## Usage
1. Ensure the PostgreSQL database is running and populated.
2. Deploy the microservices using Docker Compose (see `docker` directory README for details).
3. Interact with the APIs using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## Data Sources
- **Deutsche Bahn Timetables API**: Provides real-time train schedule and delay data (requires API Client ID and Key).
- **Timetable Scraper**: Extracts timetable data for long-distance trains from third-party websites.
- **Google Cloud PostgreSQL**: Stores train schedules, delay data, and weather information.
