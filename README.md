# WeatherApp

A modern weather dashboard built with Next.js 14 and Tailwind CSS. The app fetches live current conditions and hourly forecasts from the Meteosource API via RapidAPI and displays them in a clean, mobile-friendly UI.

## Key Features

- Search weather by city name
- Current weather summary with temperature, description, clouds, wind speed, humidity, and visibility
- Hourly forecast for today and tomorrow
- Uses dynamic query routing with `?city=` search parameter
- Responsive layout with Next.js server components and Tailwind styling

## How It Works

- `app/page.js` reads `searchParams.city` from the URL
- Default city is `gurdaspur` if no city is provided
- `components/data.js` fetches current weather data from Meteosource
- `components/hourlydata.js` fetches hourly forecast data
- `components/inputbox.js` updates the URL query to request a new city
- Weather icons are loaded from `public/bigicon_2`

## Stack

- Next.js 14
- React 18
- Tailwind CSS
- RapidAPI Meteosource Weather API

## Setup

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Open in browser

```text
http://localhost:3000
```

4. Search for a city using the input box and press Enter or change the URL to:

```text
http://localhost:3000/?city=London
```

## File Overview

- `app/page.js` - main page layout and city routing logic
- `app/layout.js` - global HTML layout and metadata
- `components/inputbox.js` - search input component
- `components/data.js` - current weather fetch and display
- `components/hourlydata.js` - hourly forecast fetch and display
- `public/bigicon_2/` - weather icon assets


## License

This project is provided as-is. Feel free to adapt it for your own use.
