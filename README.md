- - - Weather Forecast Application - - -

Github Link: https://github.com/Kamalgrg300/ai-supported-weather-api.git

This Weather Forecast Application is built with React and Redux Toolkit, providing users with current weather data and a 5-day forecast for any city using the OpenWeather API.

- - Features

* Search City Weather: Fetch real-time weather details for any city.
* 5-Day Weather Forecast: View extended weather forecasts with detailed metrics.
* Unit Conversion: Toggle between Celsius and Fahrenheit.
* Error Handling: Displays error messages for invalid inputs or API issues.
* Loading States: Visual indication when fetching data.

- - Installation and Setup
    Prerequisites
    Node.js and npm installed on your system.
    An API key from OpenWeather.com

- - Application Architecture
    State Management with Redux Toolkit

1. Async Actions:

- getCityData: Fetches current weather data for a city.
- get5DaysForecast: Fetches a 5-day weather forecast using city coordinates.

2. Weather Slice:

- citySearchLoading: Indicates loading state for city weather search.
- citySearchData: Stores city weather data.
- forecastLoading: Indicates loading state for the forecast.
- forecastData: Stores 5-day forecast data.
- forecastError: Stores error messages from the forecast API.

* FOLDER STRUCTURE
  src/
  ├── Store/
  │ └── Slices/
  │ └── Weather.js # Handles weather-related actions and state
  ├── config/ # API configuration
  ├── App.js # Main React component
  └── index.js # React DOM rendering

* - Technologies Used

1. React: Component-based UI framework.
2. Redux Toolkit: Simplified state management.
3. Axios: HTTP client for API requests.
4. OpenWeather API: Weather data provider.
