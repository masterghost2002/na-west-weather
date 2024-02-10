"use client"
import { Switch } from "@/components/ui/switch"
import {Label} from "@/components/ui/label"
type props = {
    isCelcius: boolean;
    setIsCelcius: (value: boolean) => void;

}
const Switcher = ({
    isCelcius,
    setIsCelcius
}:props) => {
    return (
        <div className="flex items-center space-x-2">
            <Switch id="temp-mode" onClick={()=>setIsCelcius(!isCelcius)}/>
            <Label htmlFor="temp-mode">
                <span className="text-gray-200">{isCelcius ?'°C' :'°F'}</span>
            </Label>
        </div>
    )
};
export default Switcher;