import React, { useMemo, useEffect } from 'react'
import "./calendar.css"
import CalendarItem from '../calendarItem/CalendarItem';
import { setDays, clearState } from '../../service/amountSlice';
import {useSelector, useDispatch} from 'react-redux'
import ChooseModal from '../categoryModal/CategoryModal';

function Calendar() {
  const disp = useDispatch();
  const daysInMonth = useMemo(() => days(), [days]);
  const store = useSelector(state => state)
  if(new Date().getDate() == 1 || store.daysArr.length == 0){
    disp(setDays(daysInMonth))
  }
  
  
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
          return <CalendarItem day={e[0]} amount={Math.floor(store.total / store.daysArr.length)} spend={e[1]} key={Math.random()}/>
        })
      }
      <button onClick={() => disp(clearState())}>Reset</button>
    </div>
  )
}

export default Calendar
