import React, {useEffect, useState} from 'react'
import './incomeModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTotal } from '../../service/amountSlice';

function IncimeModal() {
  const total = useSelector(state => state.total);
  const disp = useDispatch();
  const d = new Date();
  const [sum, setSum] = useState(0);

  useEffect(()=> {
    setSum(0)
  }, [total])

  if(total === 0 || d.getDate() === 1){
    
    return (
      <div className='incomeModal'>
        <div>
          <h2>Income:</h2>
        <input type="number" onChange={e => {setSum( +e.target.value)}}/>
        <button onClick = {() => {
          disp(setTotal(sum))
        }} > Confirm </button>
      </div>
      </div>
    )
  }else{
    return null;
  }
  
}

export default IncimeModal
