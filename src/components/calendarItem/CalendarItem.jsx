import "./calendarItem.css"

import React from 'react'

function CalendarItem({day, amount, spend, today}) {
  return (
    <div className="calendar_item">
      <span className="item_date">{day}</span>
      <div>
        <span>{amount}</span><br/>
        <span>-{spend}</span>
      </div>
    </div>
  )
}

export default CalendarItem
