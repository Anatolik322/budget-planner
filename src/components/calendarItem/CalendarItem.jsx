import "./calendarItem.css"

import React from 'react'

function CalendarItem({day, amount, spend, today}) {
    const d = new Date();
  return (
    <div className="calendar_item">
      <span className={day == d.getDate() ? "item_date_selected": "item_date"}>{day}</span>
      <div>
        <span>{amount}</span><br/>
        <span>-{spend}</span>
      </div>
    </div>
  )
}

export default CalendarItem
