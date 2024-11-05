import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css"


interface ClockProps {
    format?: '12-hour' | '24-hour';
}



const ClockWidget: React.FC<ClockProps> = ({format = '24-hour'}) => {
    const [time, setTime] = useState(new Date())
    
    const formatTime = (date: Date) => {
        return format === '12-hour'
            ? date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
            : date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);
    
    return (
        <div className={styles.clock_container}>
            {formatTime(time)}
            <div className={styles.location}>
                Denmark, Jutland
            </div>
        </div>
    );
}

export default ClockWidget;