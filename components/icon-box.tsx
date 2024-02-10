import { LucideIcon } from "../node_modules/lucide-react";
type IconBoxProps = {
    Icon:LucideIcon;
    title:string;
    label:string | number;
}
const IconBox = ({Icon, title, label}:IconBoxProps) => {
    return (
        <div
            className="flex flex-col items-center justify-center gap-1 text-[#C5C5C5]"
        >
            <Icon size={30} />
           <span
                className="text-sm text-white"
           >
                {label}
           </span>
           <span
                className="text-sm"
           >
                {title}
           </span>
        </div>
    )
}
export default IconBox;