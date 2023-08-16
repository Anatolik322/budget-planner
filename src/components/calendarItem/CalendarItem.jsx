import "./calendarItem.css"

import React from 'react'

function CalendarItem({day, amount, spend, today}) {
    const d = new Date();
  return (
    <div className="calendar_item">
      <div className={day == d.getDate() ? "item_date_selected": "item_date"}>{day}</div>
      <div className="sum">
        {/* {day == d.getDate() && <span className="can">{amount}</span>}<br/> */}
        <span className="can">{amount}</span><br/>
        <span className="sp">-{spend}</span>
      </div>
    </div>
  )
}

export default CalendarItem
