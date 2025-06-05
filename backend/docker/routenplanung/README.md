# TravelApp Route Planning Microservice

The TravelApp Route Planning Microservice is a Flask-based REST API designed to calculate optimal train routes and predict potential delays, offering alternative routes when necessary. It integrates with a PostgreSQL database to retrieve train schedules and uses external prediction services for delay estimates. This microservice powers the route planning and analysis features of the TravelApp backend.

## Features
- **Route Calculation:** Computes optimal train routes between two stations based on user-provided departure time and date.
- **Delay Prediction Integration:** Analyzes predicted delays and transfer risks for each route segment.
- **Alternative Route Planning:** Suggests alternative routes if transfers are at risk due to predicted delays.
- **Efficient Data Handling:** Uses pickled data (`station_departure.pkl`) for faster route calculations.
- **Docker Support:** Deployable as a containerized service for scalability.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Python](https://www.python.org/) (v3.11 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)
- [Git](https://git-scm.com/)
- [pip](https://pip.pypa.io/) (Python package manager)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app/docker/routenplanung
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
   - Ensure the `sollfahrplan_reihenfolge` table is populated with train schedule data (see `routen_berechnung.py` for schema).
   - Update the database connection details in `routen_berechnung.py` if necessary (default: `postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres`).

5. Generate the `station_departure.pkl` file:
   - Run the route calculation script to create the pickled data:
     ```bash
     python routen_berechnung.py
     ```

6. Start the Flask server:
   ```bash
   python flaskapp.py
   ```

The API will be available at `http://0.0.0.0:5001`.

### Docker Installation
1. Build the Docker image:
   ```bash
   docker build -t travelapp-routenplanung .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 5001:5001 --name routenplanung travelapp-routenplanung
   ```

Ensure the PostgreSQL database is accessible from the container (update host in `routen_berechnung.py` if needed).

## Usage
1. Ensure the PostgreSQL database is running and the `station_departure.pkl` file is generated.
2. Start the Flask server (or Docker container).
3. Use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API endpoints.
4. Ensure the prediction service (`http://127.0.0.1:5002/predict`) is running for delay predictions.

### Example API Requests
- **Calculate a Route:**
  ```bash
  curl -X GET "http://0.0.0.0:5001/route?source=Frankfurt%20(Main)%20Hbf&target=Aachen%20Hbf&date=2025-04-15&time=18:00"
  ```

- **Analyze and Replan Routes:**
  ```bash
  curl -X POST http://0.0.0.0:5001/api/analyse_and_replan \
  -H "Content-Type: application/json" \
  -d '{"detailed_routes": [{"station_name_from": "Würzburg Hbf", "station_name_to": "Nürnberg Hbf", "planned_departure_from": "2025-04-15T09:03:00", "planned_arrival_to": "2025-04-15T09:56:00", "train_number": "525", "departure_date": "2025-04-15", "zugtyp": "ICE", "halt_nummer": 1, "train_avg_30": 5, "station_avg_30": 3, "umsteigeort": "Nürnberg Hbf", "umsteigezeit_minuten": 12, "predicted_delay": 10, "category_probabilities": {"On time": 20, "1-9 min": 60, "10-19 min": 15, "20-29 min": 4, "30+ min": 1}}]}'
  ```

## API Endpoints
| Method | Endpoint                     | Description                              |
|--------|------------------------------|------------------------------------------|
| GET    | `/`                          | Test endpoint to check API status        |
| GET    | `/route`                     | Calculate routes between two stations    |
| POST   | `/api/analyse_and_replan`    | Analyze routes and suggest alternatives  |

### `/route` Parameters
- `source`: Starting station name (e.g., `Frankfurt (Main) Hbf`).
- `target`: Destination station name (e.g., `Aachen Hbf`).
- `date`: Travel date in `YYYY-MM-DD` format.
- `time`: Departure time in `HH:MM` format.

### `/api/analyse_and_replan` Request Body
- `detailed_routes`: Array of routes, each containing segments with fields like `station_name_from`, `station_name_to`, `planned_departure_from`, `planned_arrival_to`, `train_number`, `predicted_delay`, etc.

## Project Structure
```
docker/routenplanung/
├── flaskapp.py             # Main Flask application
├── routen_berechnung.py    # Route calculation logic
├── replan.py               # Route analysis and replanning logic
├── requirements.txt        # Python dependencies
├── Dockerfile              # Docker configuration
└── station_departure.pkl   # Pickled station departure data (generated)
```

## Database Schema
The microservice uses a PostgreSQL database with the following table:
- **sollfahrplan_reihenfolge**: Contains train schedules with columns:
  - `zug` (train_number)
  - `halt` (station_name)
  - `abfahrt_geplant` (planned_departure)
  - `ankunft_geplant` (planned_arrival)
  - `halt_nummer` (reihenfolge)
  - `zugtyp` (train type)
  - `train_avg_30` (average train delay)
  - `station_avg_30` (average station delay)

## External Dependencies
- **PostgreSQL**: Stores train schedule data (default: `postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres`).
- **Prediction Service**: Required for delay predictions (`http://127.0.0.1:5002/predict`).

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
- **GitHub:** [brksdk](https://github.com/brksdk)
- **Email:** wowitsberk@gmail.com

Happy route planning! 🚆
