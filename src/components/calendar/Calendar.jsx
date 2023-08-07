import React, { useMemo } from 'react'
import "./calendar.css"
import CalendarItem from '../calendarItem/CalendarItem';

function Calendar() {
  console.log('rer')
  function days() {
    let d = new Date()
    let days = 32 - new Date(d.getFullYear(), d.getMonth(), 32).getDate();
    let daysArr = [];
    for (let i = 1; i <= days; i++) {
      daysArr.push(i)
    }
    return daysArr;
  }
  const daysInMonth = useMemo(() => days(), [days]) 

  return (
    <div className="table">
      {
        daysInMonth.map((e) => {
          return <CalendarItem day={e} amount={50} spend={3}/>
        })
      }
    </div>
  )
}

export default Calendar
