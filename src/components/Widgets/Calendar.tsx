import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styles from "./Calendar.module.css"

export default function BasicDateCalendar() {
  return (
    <div className={styles.calendar_container}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
        </LocalizationProvider>
    </div>
  );
}