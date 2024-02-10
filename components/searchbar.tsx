"use client"
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import Switcher from "./switcher";
import { Separator } from "@/components/ui/separator"
type props = {
    location: string;
    setLocation: (value: string) => void;
    isCelcius: boolean;
    setIsCelcius: (value: boolean) => void;
}
export default function ServerSearch({
    location,
    setLocation,
    isCelcius,
    setIsCelcius
}:props) {
    const [open, setOpen] = useState<boolean>(false);
    const [currentSearch, setCurrentSearch] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSearch = (value: string) => {
        setCurrentSearch(value);
    };

    const onSelect = (item: string) => {
        const index = history.findIndex((i) => i === item);
        setLocation(item);
        if (index === -1)
            setHistory(prevState => {
                const newState = [...prevState, item];
                if(newState.length > 5)
                    newState.shift();
                localStorage.setItem('history', JSON.stringify(newState));
                return newState;
            });
        setOpen(false);
    }

    useEffect(() => {
        if (!open) return;
        const history = localStorage.getItem('history');
        if (history) {
            setHistory(JSON.parse(history));
        }
    }, [open]);

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node))
            setOpen(false);
    };

    useEffect(() => {
        // Attach event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Detach event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className="relative flex gap-2 items-center justify-between"
            ref={containerRef}
        >
            <Input
                value={currentSearch}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search"
                onFocus={() => setOpen(true)}
            />
            {open &&
                <div
                    className="bg-[#454545] absolute top-14 left-0 w-full p-4 rounded z-10"
                >
                    <ul>
                        <li
                            className="hover:bg-[#333] p-2 cursor-pointer"
                            onClick={() => onSelect(currentSearch)}
                        >
                            {currentSearch}
                        </li>
                    </ul>
                    <Separator />
                    <span
                        className="text-gray-300 text-sm"
                    >
                        Recent Searches
                    </span>
                    <ul>
                        {history.map((item, index) => (
                            <li
                                key={index}
                                className="hover:bg-[#333] p-2 cursor-pointer"
                                onClick={() => onSelect(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            }
            <Switcher 
                isCelcius={isCelcius}
                setIsCelcius={setIsCelcius}
            />
        </div>
    )
}