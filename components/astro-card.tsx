import { Astro } from "@/types";
import { Moon, Sunrise, Sunset, Lightbulb, Diamond } from '../node_modules/lucide-react';
import IconBox from "./icon-box";
type props = {
    astro : Astro
}
const AstroCard = ({astro}:props)=>{
    return (
        <div
            className="min-w-full md:min-w-[300px] bg-[#1f1f1f] p-5 rounded-xl flex flex-wrap gap-5 justify-between items-center"
        >
            <IconBox
                Icon={Sunrise}
                title="Sunrise"
                label={astro.sunrise}
            />
             <IconBox
                Icon={Sunset}
                title="Sunset"
                label={astro.sunset}
            />
            <IconBox
                Icon={Moon}
                title="Moonrise"
                label={astro.moonrise}
            />
            <IconBox
                Icon={Moon}
                title="Moonset"
                label={astro.moonset}
            />
            <IconBox
                Icon={Lightbulb}
                title="Illumination"
                label={astro.moon_illumination}
            />
            <IconBox
                Icon={Diamond}
                title="Moon Phase"
                label={astro.moon_phase.trim().split(" ")[0]}
            />
        </div>
    )
};
export default AstroCard;