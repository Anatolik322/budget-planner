import React, { useMemo, useEffect } from 'react'
import "./calendar.css"
import CalendarItem from '../calendarItem/CalendarItem';
import { setDays } from '../../service/amountSlice';
import {useSelector, useDispatch} from 'react-redux'

function Calendar() {
  const disp = useDispatch();
  const daysInMonth = useMemo(() => days(), [days]);
  
  useEffect(()=> {
    disp(setDays(daysInMonth))
  }, [])

  const store = useSelector(state => state)
  console.log(daysInMonth);
  function days() {

    let d = new Date()
    let days = 32 - new Date(d.getFullYear(), d.getMonth(), 32).getDate();
    let daysArr = [];
    for (let i = 1; i <= days; i++) {
      daysArr.push(i)
    }
    return daysArr;
  }
  

  return (
    <div className="table">
      {
        store.daysArr[0] !== null && store.daysArr.map((e) => {
          return <CalendarItem day={e[0]} amount={Math.floor(5000 / store.daysArr.length)} spend={e[1]} key={Math.random()}/>
        })
      }
    </div>
  )
}

export default Calendar
