# TravelApp Delay Prediction Microservice

The TravelApp Delay Prediction Microservice is a Flask-based REST API that predicts train delays using machine learning models. It leverages Random Forest algorithms to estimate delay durations and categorize delays based on historical and real-time data from a PostgreSQL database. This microservice integrates with the TravelApp route planning system to provide accurate delay predictions for train journeys.

## Features
- **Delay Prediction:** Estimates train delay durations using a Random Forest Regressor.
- **Delay Classification:** Categorizes delays into ranges (e.g., "On time", "1-9 min", "10-19 min") using a Random Forest Classifier.
- **Feature Engineering:** Incorporates station, train, time, weather, and holiday data for robust predictions.
- **Database Integration:** Retrieves train schedules and weather data from PostgreSQL.
- **Docker Support:** Deployable as a containerized service for scalability.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Python](https://www.python.org/) (v3.10 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)
- [Git](https://git-scm.com/)
- [pip](https://pip.pypa.io/) (Python package manager)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app/docker/vorhersage
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up the PostgreSQL database:
   - Create a database named `postgres`.
   - Ensure the `streckentabelle` table (train schedules) and `wetterdaten_zukunft` table (weather data) are populated.
   - Update the database connection details in `training2.py` and `predict_app.py` if necessary (default: `postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres`).

5. Train the models:
   - Run the training script to generate model and encoder files (`model.pkl`, `classifier.pkl`, `encoders.pkl`, `class_mapping.pkl`):
     ```bash
     python training2.py
     ```

6. Start the Flask server:
   ```bash
   python predict_app.py
   ```

The API will be available at `http://0.0.0.0:5002`.

### Docker Installation
1. Build the Docker image:
   ```bash
   docker build -t travelapp-vorhersage .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 5002:5002 --name vorhersage travelapp-vorhersage
   ```

Ensure the PostgreSQL database is accessible from the container (update host in `predict_app.py` if needed).

## Usage
1. Ensure the PostgreSQL database is running and the model files (`model.pkl`, `classifier.pkl`, `encoders.pkl`, `class_mapping.pkl`) are generated.
[Google Drive](https://drive.google.com/drive/folders/1g0-Avh2SPoP_rV5Ef9mGfeEP1D2xF7C9)
3. Start the Flask server (or Docker container).
4. Use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API endpoint.

### Example API Request
- **Predict Delays:**
  ```bash
  curl -X POST http://0.0.0.0:5002/predict \
  -H "Content-Type: application/json" \
  -d '[
    [
      {
        "station_name_from": "Würzburg Hbf",
        "station_name_to": "Nürnberg Hbf",
        "train_number": "525",
        "planned_arrival_date_from": "2025-04-15",
        "planned_departure_from": "09:03:00",
        "planned_arrival_to": "09:56:00",
        "reihenfolge_from": 1,
        "station_avg_delay_7_30": 3,
        "train_avg_delay_7_30": 5
      }
    ]
  ]'
  ```

### Response Example
```json
[
  {
    "station_name_from": "Würzburg Hbf",
    "station_name_to": "Nürnberg Hbf",
    "train_number": "525",
    "planned_arrival_date_from": "2025-04-15",
    "planned_departure_from": "09:03:00",
    "planned_arrival_to": "09:56:00",
    "predicted_delay": 8.12,
    "category_probabilities": {
      "On time": 20.0,
      "1-9 min": 60.0,
      "10-19 min": 15.0,
      "20-29 min": 4.0,
      "30+ min": 1.0
    }
  }
]
```

## API Endpoints
| Method | Endpoint      | Description                       |
|--------|---------------|-----------------------------------|
| POST   | `/predict`    | Predict train delays for routes   |

### `/predict` Request Body
- Array of routes, each containing segments with fields:
  - `station_name_from`: Starting station name.
  - `station_name_to`: Destination station name.
  - `train_number`: Train identifier.
  - `planned_arrival_date_from`: Date in `YYYY-MM-DD` format.
  - `planned_departure_from`: Time in `HH:MM:SS` or `HH:MM` format.
  - `planned_arrival_to`: Time in `HH:MM:SS` or `HH:MM` format.
  - `reihenfolge_from`: Station order in the route.
  - `station_avg_delay_7_30`: Average station delay (last 7-30 days).
  - `train_avg_delay_7_30`: Average train delay (last 7-30 days).

## Project Structure
```
docker/vorhersage/
├── predict_app.py      # Main Flask application for predictions
├── training2.py        # Script to train Random Forest models
├── requirements.txt    # Python dependencies
├── Dockerfile          # Docker configuration
├── model.pkl          # Trained Random Forest Regressor model
├── classifier.pkl     # Trained Random Forest Classifier model
├── encoders.pkl       # Label encoders for categorical features
└── class_mapping.pkl  # Mapping for delay categories
```

## Model Architecture
- **Random Forest Regressor:** Predicts delay duration in minutes using features like station names, train number, day of week, departure hour, trip duration, and historical delays.
- **Random Forest Classifier:** Categorizes delays into five classes: "On time", "1-9 min", "10-19 min", "20-29 min", "30+ min".
- **Features:**
  - Categorical: `station_name_from`, `station_name_to`, `day_period`, `wetter`.
  - Numerical: `train_number`, `day_of_week`, `planned_hour_from`, `soll_dauer`, `reihenfolge_from`, `station_avg_delay_7_30`, `train_avg_delay_7_30`.
  - Binary: `is_holiday`, `is_peak_time`, `is_weekend`.
- **Training Data:** Sourced from the `streckentabelle` table, split into 80% training and 20% validation based on unique dates.
- **Weather Data:** Retrieved from the `wetterdaten_zukunft` table for future predictions.

## Contact
For questions or suggestions, feel free to reach out:
- **GitHub:** [brksdk](https://github.com/brksdk)
