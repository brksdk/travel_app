# TravelApp Backend

TravelApp Backend is a Flask-based REST API designed for a train travel planning application. It provides user management, station information, route planning, and delay prediction functionalities, integrated with external services for real-time data and predictions. The backend uses a PostgreSQL database to store user data, station details, and train schedules.

## Features
- **User Management:** Secure user registration, login, and admin access.
- **Station Information:** Retrieve station names and coordinates (using Nominatim API).
- **Route Planning:** Plan train routes with departure/arrival times and predicted delays.
- **Route Visualization:** Draw routes between stations with coordinates.
- **Delay Prediction:** Integrate with external services for train delay predictions.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Python](https://www.python.org/) (v3.8 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [Git](https://git-scm.com/)
- [pip](https://pip.pypa.io/) (Python package manager)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app/backend
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
   - Update the database URL in `app.py` if necessary (default: `postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres`).
   - Run database migrations or initialize tables (see `app.py` for table schemas).

5. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add any necessary environment variables (e.g., API keys for external services like Nominatim).

6. Populate station coordinates (optional):
   - Run the `populate_stations.py` script to fetch and store station coordinates:
     ```bash
     python populate_stations.py
     ```

7. Start the Flask server:
   ```bash
   python app.py
   ```

The API will be available at `http://0.0.0.0:5000`.

## Usage
1. Ensure the PostgreSQL database is running and accessible.
2. Start the Flask server (see Installation step 7).
3. Use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API endpoints.
4. Ensure external services (e.g., `http://127.0.0.1:5001` for route planning and `http://127.0.0.1:5002` for predictions) are running.

### Example API Requests
- **Register a User:**
  ```bash
  curl -X POST http://0.0.0.0:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{"vorname": "John", "nachname": "Doe", "email": "john@example.com", "passwort": "securepassword", "tel_nummer": "+123456789"}'
  ```

- **Login:**
  ```bash
  curl -X POST http://0.0.0.0:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "securepassword"}'
  ```

- **Get Stations:**
  ```bash
  curl -X GET http://0.0.0.0:5000/api/stations
  ```

## API Endpoints
| Method | Endpoint                     | Description                              |
|--------|------------------------------|------------------------------------------|
| POST   | `/api/register`              | Register a new user                      |
| POST   | `/api/login`                 | Authenticate a user                      |
| POST   | `/api/admin/login`           | Authenticate an admin (ID=1)             |
| GET    | `/api/users`                 | Retrieve all users                       |
| DELETE | `/api/delete_user/<user_id>` | Delete a user (except admin)             |
| GET    | `/api/stations`              | Get distinct station names               |
| GET    | `/api/station_coordinates`   | Get station coordinates                  |
| GET    | `/api/sollstrecken_stations`| Get stations from `sollstrecken` table   |
| POST   | `/api/drawroute`             | Draw a route between two stations        |
| POST   | `/api/route_plan`            | Plan a route with delay predictions      |

## Project Structure
```
backend/
├── app.py                   # Main Flask application
├── populate_stations.py     # Script to populate station coordinates
├── requirements.txt         # Python dependencies
└── .env                     # Environment variables (not tracked)
```

## Database Schema
The backend uses a PostgreSQL database with the following tables:
- **users**: Stores user information (id, vorname, nachname, email, passwort, tel_nummer).
- **streckentabelle**: Train schedule data with departure/arrival times and delays.
- **streckentabelle1103**: Simplified station connections (from/to stations).
- **stations**: Station names with latitude and longitude.
- **sollstrecken**: Planned train routes with station order and train numbers.

## External Services
- **Nominatim API**: Used by `populate_stations.py` to fetch station coordinates.
- **Route Planning Service**: Local service at `http://127.0.0.1:5001/route` for route data.
- **Prediction Service**: Local service at `http://127.0.0.1:5002/predict` for delay predictions.

Ensure these services are running for full functionality.

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

Happy train traveling! 🚆