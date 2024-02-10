"use client";
import Image from "next/image";
import Search from "@/components/searchbar";
import {useState } from "react";
import { Toaster } from 'react-hot-toast';
import WeatherInfoCard from "@/components/weather-info-card";
import AirQualityCard from "@/components/air-quality-card";
import HistoryDrawer from "@/components/forecast-drawer";
import dummyData from "@/dummy-data";
import useFetch from "@/hooks/useFetch";
import Loader from "@/components/loader";
import { Weather } from "@/types";
export default function Home() {

  const [location, setLocation] = useState<string>("Haryana");
  const [isCelcius, setIsCelcius] = useState<boolean>(true);

  // url for fetching location wise weather data
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}`;

  const { data:currentWeather, loading} = useFetch<Weather>({url, defaultValues:{
    location:dummyData.location,
    current:dummyData.current
  }});

  // component 
  return (
    <main className="flex  px-4 sm:px-6 py-2 flex flex-col">
      <Toaster />
      <Search
        location={location}
        setLocation={setLocation}
        isCelcius={isCelcius}
        setIsCelcius={setIsCelcius}
      />
      <div
        className="flex flex-col md:flex-row py-5 justify-center md:items-center gap-5 relative"
      >
        <div
          className="absolute top-1 right-1"
        >
          <Loader isLoading={loading} />
        </div>
        <div className="md:flex-1 justify-center">
          <Image
            src={`https:${currentWeather.current.condition.icon}`}
            alt="Weather Icon"
            width={400}
            height={400}
          />
        </div>
        <div className="md:flex-1 ">
          <WeatherInfoCard weather={currentWeather} isCelcius={isCelcius} />
        </div>
      </div>
      <div
        className="flex flex-wrap md:flex-row md:justify-between justify-center items-center gap-5 py-5"
      >
        <AirQualityCard
          visibility={currentWeather.current.vis_km}
          wind={currentWeather.current.wind_kph}
          pressure={currentWeather.current.pressure_mb}
          uv={currentWeather.current.uv}
          precipitation={currentWeather.current.precip_mm}
          quality={currentWeather.current.wind_degree}
        />
        <HistoryDrawer 
          location={location}
        />
      </div>
    </main>
  );
}
