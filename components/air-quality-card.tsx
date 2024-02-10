import { AirVent, SprayCan, Wind, Eye, Skull } from '../node_modules/lucide-react';
import IconBox from './icon-box';
type Props = {
    pressure:number;
    uv:number;
    visibility:number;
    wind:number;
    precipitation:number;
    quality:number;
}
const AirQualityCard = ({
    pressure,
    uv,
    visibility,
    wind,
    precipitation,
    quality
}:Props) => {
    return (
        <div
            className="min-w-full md:min-w-[300px] bg-[#292929] p-5 rounded-xl flex flex-wrap gap-5 justify-between items-center"
        >
            <IconBox 
                Icon={AirVent}
                title="Air Quality"
                label={quality}
            />
            <IconBox 
                Icon={Skull}
                title="UV Index"
                label={uv}
            />
            <IconBox 
                Icon={SprayCan}
                title="Pressure"
                label={`${pressure} mb`}
            />
            <IconBox 
                Icon={Wind}
                title="Wind"
                label={`${wind} km/h`}
            />
            <IconBox 
                Icon={AirVent}
                title="Precipitation"
                label={`${precipitation} mm`}
            />
            <IconBox 
                Icon={Eye}
                title="Visibility"
                label={`${visibility} km`}
            />
        </div>
    );
};
export default AirQualityCard;