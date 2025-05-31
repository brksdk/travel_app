# TravelApp

TravelApp is a comprehensive web application designed for planning train journeys in Germany. It enables users to search for train routes, predict potential delays, visualize routes on an interactive map, and explore city highlights with real-time weather information. The application consists of a backend microservice for delay prediction and a frontend interface for user interaction, leveraging modern web technologies and machine learning.

## Overview
TravelApp combines a robust backend with a user-friendly frontend to deliver a seamless travel planning experience:
- **Backend**: A Flask-based microservice that uses Random Forest models to predict train delays based on historical and real-time data from a PostgreSQL database.
- **Frontend**: A Vue.js-based interface that allows users to search routes, view delay predictions, explore city information, and manage accounts, with support for multiple languages and interactive maps.

The project is organized into two main directories, each with its own detailed README for setup and usage instructions.

## Project Structure
```
travel_app/
├── backend/
|   |   ├──README.md
├── docker/
│   ├── vorhersage/            # Backend microservice for delay prediction
│   │   ├── README.md          # Detailed backend setup and usage
|   ├── routenplannung/        # Backend microservice for planning of routes
│   │   ├── README.md          # Detailed backend setup and usage
├── frontend/
│   ├── vue_frontend/src          # Frontend Vue.js application
│   │   |   ├── README.md          # Detailed frontend setup and usage
├── README.md                  # This file (project overview)
```

## Components
### 1. Backend (docker/vorhersage)
The backend is a Flask-based microservice responsible for predicting train delays using machine learning models. It integrates with a PostgreSQL database to fetch train schedules and weather data, providing delay predictions and alternative route suggestions.

- **Key Features**:
  - Delay prediction with Random Forest Regressor and Classifier.
  - REST API endpoint (`/predict`) for route delay forecasts.
  - Dockerized for easy deployment.
- **Technologies**: Python, Flask, scikit-learn, pandas, SQLAlchemy, PostgreSQL, Docker.
- **Details**: For setup, usage, and API documentation, refer to the [Backend README](https://github.com/brksdk/travel_app/blob/master/docker/vorhersage/README.md).

### 2. Frontend (frontend/vue_frontend)
The frontend is a Vue.js application that provides an intuitive interface for users to plan train journeys, visualize routes, and explore city information. It communicates with the backend API to fetch route plans and delay predictions.

- **Key Features**:
  - Route search with delay predictions and alternative routes.
  - Interactive route visualization using Leaflet.
  - City exploration with image carousels and real-time weather data.
  - User authentication and admin panel for account management.
  - Multilingual support via Vue I18n.
- **Technologies**: Vue.js, Vue Router, Vue I18n, Leaflet, Axios, OpenWeatherMap API.
- **Details**: For setup, usage, and component details, refer to the [Frontend README](https://github.com/brksdk/travel_app/blob/master/frontend/vue_frontend/README.md).

## Prerequisites
To run TravelApp, ensure you have the following installed:
- [Python](https://www.python.org/) (v3.10 or higher) for the backend.
- [Node.js](https://nodejs.org/) (v16 or higher) and [npm](https://www.npmjs.com/) for the frontend.
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher) for the database.
- [Docker](https://www.docker.com/) (optional, for backend deployment).
- [Git](https://git-scm.com/) for cloning the repository.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app
   ```

2. Set up the backend:
   - Navigate to `docker/vorhersage` and follow the [Backend README](https://github.com/brksdk/travel_app/blob/master/docker/vorhersage/README.md) for installation and configuration.

3. Set up the frontend:
   - Navigate to `frontend/vue_frontend` and follow the [Frontend README](https://github.com/brksdk/travel_app/blob/master/frontend/vue_frontend/README.md) for installation and configuration.

4. Ensure the PostgreSQL database is running and populated with required tables (`streckentabelle` and `wetterdaten_zukunft`).

5. Start both the backend and frontend servers as described in their respective READMEs.

## Usage
- **Route Planning**: Use the frontend to search for train routes by specifying departure/arrival stations, date, and time. View predicted delays and alternative routes if transfers are at risk.
- **City Exploration**: Browse city pages to view highlights and real-time weather data.
- **User Management**: Register or log in to access personalized features. Admins (ID: 1) can manage user accounts via the admin panel.
- **Route Visualization**: Explore routes on an interactive map with animated train movement.

For detailed instructions, refer to the respective READMEs:
- [Backend README](https://github.com/brksdk/travel_app/blob/master/docker/vorhersage/README.md)
- [Frontend README](https://github.com/brksdk/travel_app/blob/master/frontend/vue_frontend/README.md)

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a pull request with a clear description of your changes.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or suggestions, feel free to reach out:
- **GitHub**: [brksdk](https://github.com/brksdk)
- **Email**: wowitsberk@gmail.com
