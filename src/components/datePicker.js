// src/components/DatePicker.js
import React from 'react';

export const DatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
    />
  );
};

export default DatePicker;
