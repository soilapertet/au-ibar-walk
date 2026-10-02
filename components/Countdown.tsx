"use client";

import { useEffect, useState } from "react";

// Assume start time is 7:00 AM 
const EVENT_DATE = new Date("2026-11-28T07:00:00");

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface Tile  {
    label: string;
    value : number;
}

// Calculate how many days until the event
function getTimeLeft() : TimeLeft {

    const diff = Math.max(EVENT_DATE.getTime() - Date.now(), 0);

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
    };
}

export default function Countdown() {
    
    // Initialize to null so the server-rendered HTML has nothing time-based in it
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {

        // Runs only in the browser; update the state variable to the time left until the event
        setTimeLeft(getTimeLeft());

        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        // Cleanup: stops the interval if the component is unmounted e.g. the user navigates away
        return () => clearInterval(interval);
        
    }, []);  // empty array = "run once on mount, not on every re-render"

    if (!timeLeft) return null;

    const tiles : Tile[] = [
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes},
        { label: "Seconds", value: timeLeft.seconds}
    ];

    return (
        <div className="countdown">
            {tiles.map((tile) => (
                <div 
                    key={tile.label} 
                    className="countdown-tile"
                >   
                    {/* key={tile.value} forces React to treat each new number 
                        a brand-new element, which replays the CSS "flip" animation */}
                    <span className="countdown-value" key={tile.value}>
                        {String(tile.value).padStart(2, "0")}
                    </span>
                    <span className="countdown-label">{tile.label}</span>
                </div>
            ))}
        </div>
    );
}