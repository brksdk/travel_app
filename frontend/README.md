# TravelApp Frontend

The TravelApp Frontend is a Vue.js-based application that provides a user-friendly interface for planning train journeys in Germany. It integrates with the TravelApp backend to offer route planning, delay predictions, user authentication, and city exploration features. The frontend uses Vue 3, Vue Router for navigation, Vue I18n for internationalization, and Leaflet for interactive maps. It features a responsive design with dynamic backgrounds, weather integration, and animated route visualizations.

## Features
- **Route Planning**: Allows users to search for train routes between stations, view predicted delays, and explore alternative routes.
- **User Authentication**: Supports user registration, login, and admin panel access for managing users.
- **City Exploration**: Displays information about popular German cities with image carousels and weather data.
- **Interactive Map**: Visualizes train routes with animated train movements using Leaflet.
- **Multilingual Support**: Offers English and German interfaces with flag-based language switching.
- **Dynamic UI**: Includes animated transitions, responsive layouts, and real-time weather updates.
- **Admin Panel**: Enables admins to list and delete users (restricted to user ID=1).

## Project Structure
```
travel_app/frontend/vue_frontend/
├── public/                     # Static assets (e.g., images, train.png)
│   ├── train.png               # Train icon for route map
│   └── zug.png                 # Train image for animations
├── src/                        # Source code
│   ├── assets/                 # Images (e.g., flags, backgrounds)
│   │   ├── uk-flag.png         # English flag icon
│   │   ├── de-flag.png         # German flag icon
│   │   └── homeW.jpeg          # Default background image
│   ├── data/                   # Static data
│   │   └── citiesData.js       # City data for carousels and backgrounds
│   ├── views/                  # Vue components for routed views
│   │   ├── Admin.vue           # Admin login page
│   │   ├── AdminPanel.vue      # Admin panel for user management
│   │   ├── City.vue               # City exploration page with carousels
│   │   ├── HomeView.vue        # Home page with route search form
│   │   ├── Login.vue           # User login page
│   │   ├── Register.vue        # User registration page
│   │   └── RouteMap.vue        # Route visualization with interactive map
│   ├── App.vue                 # Main app component with navbar and router-view
│   ├── main.js                  # Application entry point
│   └── router.js               # Vue Router configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- TravelApp Backend running at `http://127.0.0.1:5000` (see backend README for setup)

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/brksdk/travel_app.git
   cd travel_app/frontend/vue_frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set Up Environment**:
   - Ensure the backend server is running at `http://127.0.0.1:5000`.
   - Verify that `public/train.png` and `public/zug.png` are present for map and animation assets.
   - Check that the OpenWeatherMap API key in `City.vue` (`09dd0052b4d2d41724e431b1832d3107`) is valid or replace it with your own key.

4. **Run the Development Server**:
   ```bash
   npm run serve
   ```
   or
   ```bash
   yarn serve
   ```
   The app will be available at `http://localhost:8080`.

5. **Build for Production** (optional):
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```
   The production-ready files will be generated in the `dist` folder.

## Setting Up Vue.js from Scratch
To create a new Vue.js project similar to this one, follow these steps:
1. **Install Vue CLI** (if not already installed):
   ```bash
   npm install -g @vue/cli
   ```

2. **Create a New Vue Project**:
   ```bash
   vue create vue_frontend
   ```
   - Select Vue 3 and choose features like Babel, Router, and ESLint.
   - Optionally add Vuex or TypeScript based on needs.

3. **Install Additional Dependencies**:
   ```bash
   npm install axios vue-i18n@9 vue-leaflet@0.10.1 leaflet@1.9.4
   ```
   - `axios`: For HTTP requests to the backend.
   - `vue-i18n`: For multilingual support.
   - `vue-leaflet` and `leaflet`: For interactive maps in `RouteMap.vue`.

4. **Configure Vue Router**:
   - Create a `router.js` file in `src` and define routes (e.g., `/`, `/login`, `/city/:cityName`).
   - Import and use the router in `main.js`.

5. **Set Up Vue I18n**:
   - Create a translations file (e.g., `src/i18n.js`) with English and German translations.
   - Initialize Vue I18n in `main.js` and configure language switching.

6. **Add Leaflet Styles**:
   - Import Leaflet CSS in `main.js` or a global stylesheet:
     ```javascript
     import 'leaflet/dist/leaflet.css';
     ```

7. **Structure Components**:
   - Create a main `App.vue` for the navbar and router-view.
   - Organize page-specific components in `src/views`.

8. **Run the Project**:
   ```bash
   npm run serve
   ```

## Usage
1. **Home Page (`HomeView.vue`)**:
   - Search for train routes by entering departure and arrival stations, date, and time.
   - View route results with predicted delays, train schedules, and alternative routes.
   - Explore popular cities with links to city pages.

2. **Route Map (`RouteMap.vue`)**:
   - Enter start and end stations to visualize the route on an interactive Leaflet map.
   - See animated train movement along the route with station popups.

3. **City Exploration (`City.vue`)**:
   - View carousels of attractions for selected cities (e.g., Berlin, München).
   - Check real-time weather data from OpenWeatherMap.
   - Toggle between carousel view and a welcome message.

4. **User Authentication**:
   - **Register (`Register.vue`)**: Create a new account with name, surname, email, password, and phone number.
   - **Login (`Login.vue`)**: Log in with email and password to access personalized features.
   - **Admin Login (`Admin.vue`)**: Log in as an admin (user ID=1) to access the admin panel.

5. **Admin Panel (`AdminPanel.vue`)**:
   - List all registered users and delete non-admin users.
   - Accessible only to the admin (user ID=1).

6. **Language Switching**:
   - Use the flag icons in the navbar to switch between English and German.

## Components Overview
- **`App.vue`**:
  - Main component containing the navbar and router-view.
  - Manages user state, language switching, dynamic backgrounds, and weather display.
  - Conditionally hides the navbar on admin pages.

- **`HomeView.vue`**:
  - Displays a route search form with station autocompletion.
  - Shows route results with train schedules, delays, and alternative routes.
  - Includes a train animation during loading and a popular cities section.

- **`RouteMap.vue`**:
  - Provides an interactive Leaflet map for route visualization.
  - Fetches station data and route coordinates from the backend.
  - Animates a train icon along the route path.

- **`City.vue`**:
  - Shows city-specific carousels with images and descriptions.
  - Fetches and displays weather data for the selected city.
  - Emits events to update the background and weather in `App.vue`.

- **`Login.vue`**:
  - Handles user login with email and password.
  - Emits user data to `App.vue` upon successful login.

- **`Register.vue`**:
  - Manages user registration with form validation.
  - Displays success or error messages after submission.

- **`Admin.vue`**:
  - Provides a login form for admin access (restricted to user ID=1).
  - Redirects to the admin panel upon successful login.

- **`AdminPanel.vue`**:
  - Allows admins to list and delete users.
  - Includes a logout button and home navigation.

## Dependencies
- **Node Modules**:
  - `vue@3.x`: Core Vue.js framework.
  - `vue-router@4.x`: For client-side routing.
  - `vue-i18n@9.x`: For internationalization.
  - `axios`: For API requests to the backend.
  - `vue-leaflet@0.10.1` and `leaflet@1.9.4`: For interactive maps.
- **External APIs**:
  - **OpenWeatherMap**: Provides weather data for `City.vue`.
  - **Backend API**: `http://127.0.0.1:5000` for user, station, and route data.
- **Assets**:
  - Flag icons (`uk-flag.png`, `de-flag.png`) for language switching.
  - Background images (`homeW.jpeg`) and map icons (`train.png`, `zug.png`).

## Notes
- Ensure the backend API is running at `http://127.0.0.1:5000` before starting the frontend.
- The OpenWeatherMap API key in `City.vue` should be replaced with a personal key for production use.
- Station data is fetched from the backend's `/api/stations` and `/api/sollstrecken_stations` endpoints.
- The admin panel is restricted to the user with ID=1 for security.
- The frontend supports responsive design but may require additional testing for smaller screens.
