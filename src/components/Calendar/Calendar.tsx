import React, { FC, useState } from 'react';
import './Calendar.scss';

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); 
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const daysArray = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>⬅</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>➡</button>
      </div>
      <div className="calendar-grid">
        {['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'].map((day, i) => (
          <div className="day-name" key={i}>{day}</div>
        ))}
        {daysArray.map((day, i) => (
          <div className={`day-cell${day ? '' : ' empty'}`} key={i}>
            {day || ''}
            
          </div>
        ))}
      </div>
    </div>
  )};



export default Calendar;
