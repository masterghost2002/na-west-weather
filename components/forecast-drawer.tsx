import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import LineChartGraph from "./charts/line-chart"
import AstroCard from "./astro-card"
import dummyData from "@/dummy-data"
import useFetch from "@/hooks/useFetch"
import { ForecastType } from "@/types"
type props = {
  location: string
}
export default function ForecastDrawer({ location }: props) {

  const url = `https://api.weatherapi.com/v1/forecast.json?key=327c2004dbc247e3ac0134011240902&q=${location}&aqi=no`;

  const { data:forecast} = useFetch<ForecastType>({url, defaultValues:dummyData});

  const temperatureVariance = forecast.forecast.forecastday[0].hour.map((hour) => {
    return {
      name: hour.time,
      tmp: hour.temp_c
    }
  });

  return (
    <Drawer >
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full md:w-[400px] bg-[#292929] text-white"
        >
          View Forecast
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-[#292929]">
        <div className="mx-auto w-full max-w-sm p-2">
          <DrawerHeader>
            <DrawerTitle>Forecast data</DrawerTitle>
            <DrawerDescription>Weather Forecast: Precise predictions for informed decisions.</DrawerDescription>
          </DrawerHeader>
          <span
            className="text-white text-sm font-semibold"
          >
            Hour by hour temperature variance
          </span>
          <div className="mt-3 h-[120px]">
          <LineChartGraph 
            data={temperatureVariance}
          />
          </div>
          <AstroCard astro={forecast.forecast.forecastday[0].astro} />
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
