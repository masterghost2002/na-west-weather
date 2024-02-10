import { Weather } from "@/types";
type props = {
    weather:Weather,
    isCelcius:boolean
}
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const WeatherInfoCard = ({weather, isCelcius}:props)=>{
    const date = new Date(weather.location.localtime);
    const day = date.getDay();
    const dayName = date.toLocaleString('default', { weekday: 'long' });
    const month = date.getMonth();
    const year = date.getFullYear();
    return (
        <div
            className="flex flex-col gap-1 md:gap-2"
        >
            <h1
                className="text-2xl md:text-4xl font-bold text-gray-300"
            >
                {weather.location.name}, {weather.location.country}
            </h1>
            <span
                    className="text-gray-400 text-[4rem] md:text-[6rem] font-bold"
            >
                {isCelcius?weather.current.temp_c:weather.current.temp_f} {isCelcius ?'°C' :'°F'}
            </span>
            <span
                    className="text-gray-300 text-[1rem] md:text-[2rem]"
            >
                {dayName}, {monthNames[month]} {day}, {year}
            </span>
            <span
                    className="text-gray-300 text-[1rem] md:text-[2rem]  text-bold"
            >
                {weather.current.condition.text}
            </span>
        </div>
    )
};
export default WeatherInfoCard;