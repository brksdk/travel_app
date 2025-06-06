# TravelApp Backend Centeral Script

This module in the TravelApp backend contains critical components for data population and user-facing API services. It includes scripts for populating station coordinates in the database and a Flask-based API for user management, station data retrieval, and route planning integration. These components enhance the TravelApp by enabling station geolocation and providing a central API to connect the frontend with backend microservices.

## Features
- **Station Coordinates Population**: Retrieves geolocation data (latitude and longitude) for train stations using the Nominatim API and stores them in the PostgreSQL database.
- **User Management**: Provides API endpoints for user registration, login, and admin functionalities.
- **Station and Route Data**: Exposes endpoints to fetch station lists, coordinates, and route plans, integrating with the `routenplanung` and `vorhersage` microservices.
- **Database Integration**: Interacts with the PostgreSQL database to manage user and station data.
- **CORS Support**: Enables cross-origin requests for seamless frontend-backend communication.

## Project Structure
```
travel_app/backend/pycharm/
├── app.py                  # Main Flask application for user and station APIs
├── populate_stations.py    # Script to populate station coordinates
```

## Prerequisites
- [Python](https://www.python.org/) (v3.10 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [Git](https://git-scm.com/)
- [pip](https://pip.pypa.io/)
- [Docker](https://www.docker.com/) (optional, if other microservices are containerized)
- Required Python packages (see Installation section)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app/backend/pycharm
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install flask flask-cors flask-sqlalchemy psycopg2-binary bcrypt requests
   ```

4. Set up the PostgreSQL database:
   - Ensure a database named `postgres` is created.
   - Create the required tables (`users`, `stations`, `sollstrecken`, `streckentabelle`, `streckentabelle1103`) with the appropriate schema (see `app.py` for table definitions).
   - Update the database connection in `app.py` and `populate_stations.py` if needed (default: `postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres`).

5. Populate station coordinates:
   ```bash
   python populate_stations.py
   ```

6. Start the Flask server:
   ```bash
   python app.py
   ```

   The API will be available at `http://0.0.0.0:5000`.

## Usage
1. **Populate Station Coordinates**:
   - Run `populate_stations.py` to fetch and store station coordinates from the Nominatim API.
   - The script queries the `sollstrecken` table for unique station names, retrieves their coordinates, and inserts them into the `stations` table.
   - Note: The script respects Nominatim's rate limits by adding a 1-second delay between requests.

2. **API Endpoints**:
   - Use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API.
   - The Flask server integrates with the `routenplanung` (`http://127.0.0.1:5001`) and `vorhersage` (`http://127.0.0.1:5002`) microservices for route planning and delay predictions.

### API Endpoints
| Method | Endpoint                     | Description                              |
|--------|------------------------------|------------------------------------------|
| POST   | `/api/register`              | Register a new user                      |
| POST   | `/api/login`                 | User login                               |
| POST   | `/api/admin/login`           | Admin login (restricted to user ID=1)    |
| GET    | `/api/users`                 | List all users (admin access)            |
| DELETE | `/api/delete_user/<user_id>` | Delete a user (except admin)             |
| GET    | `/api/stations`              | Get unique stations from `streckentabelle1103` |
| GET    | `/api/station_coordinates`   | Get station coordinates from `stations`  |
| GET    | `/api/sollstrecken_stations`| Get unique stations from `sollstrecken`  |
| POST   | `/api/drawroute`             | Get route stops and coordinates          |
| POST   | `/api/route_plan`            | Plan routes with delay predictions       |

### Example API Requests
- **Register a User**:
   ```bash
   curl -X POST http://0.0.0.0:5000/api/register \
   -H "Content-Type: application/json" \
   -d '{"vorname": "Ali", "nachname": "Yılmaz", "email": "ali@example.com", "passwort": "secure123", "tel_nummer": "+905551234567"}'
   ```

   **Response**:
   ```json
   {"message": "Kullanıcı başarıyla kaydedildi!"}
   ```

- **Plan a Route**:
   ```bash
   curl -X POST http://0.0.0.0:5000/api/route_plan \
   -H "Content-Type: application/json" \
   -d '{"from_station": "Berlin Hbf", "to_station": "München Hbf", "travel_date": "2025-06-04", "travel_time": "08:00"}'
   ```

   **Response** (simplified):
   ```json
   {
     "routes": [
       {
         "route": [
           {
             "station_name_from": "Berlin Hbf",
             "station_name_to": "München Hbf",
             "planned_departure_from": "08:00:00",
             "planned_arrival_to": "12:30:00",
             "train_number": "ICE 1001",
             "predicted_delay": 8.12,
             "category_probabilities": {"On time": 20, "1-9 min": 60, "10-19 min": 15}
           }
         ],
         "erwartete_gesamtverspaetung_minuten": 18.5,
         "gesamtverspaetungswahrscheinlichkeit": 74.6
       }
     ],
     "predictions": [...]
   }
   ```

## Dependencies
- **External Services**:
  - **Nominatim API**: Used by `populate_stations.py` for geolocation data.
  - **Route Planning Microservice**: `http://127.0.0.1:5001` (for `/api/route_plan`).
  - **Delay Prediction Microservice**: `http://127.0.0.1:5002` (for `/api/route_plan`).
- **Database Tables**:
  - `users`: Stores user information (id, vorname, nachname, email, passwort, tel_nummer).
  - `stations`: Stores station coordinates (id, station_name, latitude, longitude).
  - `sollstrecken`: Stores train route data (train_number_from, station_name_from, etc.).
  - `streckentabelle` and `streckentabelle1103`: Store train schedule and delay data.

## Notes
- Ensure the `routenplanung` and `vorhersage` microservices are running before using `/api/route_plan`.
- The `populate_stations.py` script should be run once to populate the `stations` table, or whenever new stations are added to `sollstrecken`.
- Passwords are hashed using `bcrypt` for security.
- The API handles NaN/infinite values in JSON responses to ensure compatibility.
