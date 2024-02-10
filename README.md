---

# Next.js Weather App

This is a Progressive Web Application (PWA) built with Next.js that displays the weather information of a selected state. It utilizes a weather API to fetch and display the data.
## Preview


https://github.com/masterghost2002/na-west-weather/assets/55751461/aed93e20-d81b-41dc-abbf-7819b5c4c78b


## Features
- View weather information of selected state.
- Progressive Web Application (PWA) for enhanced offline experience.
- Responsive design for seamless usage across devices.

## Setup Locally

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```
   cd nextjs-pwa-weather-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory of your project and add your weather API key:

   ```
   NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key_here
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to view the app.

## Requirements

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Valid API key for a weather API service (such as OpenWeatherMap, WeatherAPI, etc.)

## Environment Variables

This project uses the following environment variables:

- `NEXT_PUBLIC_WEATHER_API_KEY`: API key for the weather API service.

Ensure you have set up these environment variables properly before running the application.

## Deployment

For deployment, you can use platforms like Vercel, Netlify, or your preferred hosting service. Remember to set your environment variables in the deployment environment.

---
