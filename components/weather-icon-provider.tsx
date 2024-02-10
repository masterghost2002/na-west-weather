import { CloudSun, Cloud,CloudRain, Sun } from "../node_modules/lucide-react";
const WeatherIconProvider = ({iconCode}:{iconCode:number}) => {
    switch (iconCode) {
        case 1003:
            return <CloudSun  className="h-40 w-40 md:h-[50%] md:w-[50%]"/>;
        case 1000:
            return <Sun  className="h-40 w-40 md:h-[50%] md:w-[50%]" />;
        case 1006:
            return <Cloud  className="h-40 w-40 md:h-[50%] md:w-[50%]" />;
        default:
            return <CloudSun  className="h-40 w-40 md:h-[50%] md:w-[50%]" />;
    }

};
export default WeatherIconProvider;