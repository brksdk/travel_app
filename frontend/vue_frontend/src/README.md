# TravelApp Frontend

The TravelApp Frontend is a Vue.js-based web application that provides an intuitive interface for planning train journeys, predicting delays, and exploring city information. It integrates with a backend API to fetch route plans, delay predictions, and user data, and uses Leaflet for interactive route visualization. The application supports multiple languages and includes user authentication, admin management, and real-time weather updates.

## Features
- **Route Planning:** Search for train routes by specifying departure and arrival stations, date, and time.
- **Delay Prediction:** Display predicted delays for each route segment, with alternative route suggestions for high-risk transfers.
- **Interactive Map:** Visualize train routes on a circular Leaflet map with animated train movement.
- **City Information:** Explore city highlights through image carousels and view real-time weather data via OpenWeatherMap API.
- **User Management:** Register and log in as a user, with an admin panel for managing user accounts.
- **Multilingual Support:** Interface available in multiple languages using Vue I18n.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- [Git](https://git-scm.com/)
- A running backend server (default: `http://127.0.0.1:5000`) for API integration

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app/frontend/vue_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the project root.
   - Add the following (adjust as needed):
     ```env
     VUE_APP_API_BASE_URL=http://127.0.0.1:5000
     VUE_APP_OPENWEATHERMAP_API_KEY=09dd0052b4d2d41724e431b1832d3107
     ```

4. Start the development server:
   ```bash
   npm run serve
   ```

The application will be available at `http://localhost:8080`.

## Usage
1. Ensure the backend server is running at `http://127.0.0.1:5000`.
2. Open the application in your browser.
3. Use the following features:
   - **Home Page:** Search for train routes by entering departure/arrival stations, date, and time.
   - **City Page:** View city highlights and weather data for selected cities.
   - **Route Map:** Visualize routes on an interactive map with animated train movement.
   - **Login/Register:** Create an account or log in to access personalized features.
   - **Admin Panel:** Log in as an admin (ID: 1) to manage user accounts.

### Example API Endpoints (Backend Integration)
The frontend interacts with the following backend endpoints:
- **GET `/api/stations`**: Fetch available stations for route planning.
- **POST `/api/route_plan`**: Retrieve route plans and delay predictions.
- **POST `/api/drawroute`**: Fetch route coordinates for map visualization.
- **POST `/api/login`**: Authenticate users.
- **POST `/api/register`**: Register new users.
- **POST `/api/admin/login`**: Authenticate admin users.
- **GET `/api/users`**: List all users (admin only).
- **DELETE `/api/delete_user/:id`**: Delete a user (admin only).

### Example Usage
- **Search for a Route:**
  - Navigate to the home page.
  - Enter "Würzburg Hbf" as the departure station, "Nürnberg Hbf" as the arrival station, select a date (e.g., 2025-06-01), and time (e.g., 09:00).
  - Click "Search" to view available routes with predicted delays and alternative suggestions.
- **View City Information:**
  - Click on a city (e.g., "Berlin") from the popular cities section.
  - Explore carousels with images and descriptions, and check the current weather.
- **Admin Management:**
  - Log in as an admin (e.g., email: `admin@example.com`, password: `admin123`).
  - List all users and delete non-admin accounts as needed.

## Project Structure
```
frontend/vue_frontend/
├── src/
│   ├── views/
│   │   ├── Admin.vue          # Admin login page
│   │   ├── AdminPanel.vue     # Admin user management panel
│   │   ├── City.vue           # City information with carousels and weather
│   │   ├── HomeView.vue       # Home page with route search and results
│   │   ├── Login.vue          # User login page
│   │   ├── Register.vue       # User registration page
│   │   ├── RouteMap.vue       # Interactive route map with Leaflet
|   ├── App.vue                # Nav-bar
|   ├── main.js                     
│   ├── data/
│   │   ├── citiesData.js      # City data for carousels and backgrounds
│   ├── assets/
│   │   ├── zug.png            # Train animation image
│   │   ├── train.png          # Train icon for map
├── public/
│   ├── index.html             # Main HTML entry point
├── package.json               # Project dependencies and scripts
├── vue.config.js              # Vue CLI configuration (if applicable)
```

## Dependencies
Key dependencies (see `package.json` for full list):
- `vue`: Core framework for building the UI.
- `vue-router`: Client-side routing.
- `vue-i18n`: Internationalization support.
- `axios`: HTTP requests to the backend API.
- `@vue-leaflet/vue-leaflet`: Interactive maps.
- `leaflet`: Map rendering library.

## Configuration
- **Backend API:** Update `VUE_APP_API_BASE_URL` in `.env` to match your backend server.
- **Weather API:** The OpenWeatherMap API key is hardcoded in `City.vue`. Replace it with your own key in `.env` for production.
- **Internationalization:** Add translations to `src/locales/` for additional languages.
- **Assets:** Place static assets (e.g., `zug.png`, `train.png`) in `src/assets/` or `public/`.

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

Happy traveling! 🚆
