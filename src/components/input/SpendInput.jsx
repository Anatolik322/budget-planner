import React, {useState} from 'react'
import { addSpend } from '../../service/amountSlice'
import { useDispatch } from "react-redux"
function SpendInput() {
  
  const [sum, setSum] = useState(0);
  const disp = useDispatch();
  
  const handleClick = () => {
   
    const d = new Date();
    //e.preventDefault();
    disp(addSpend({
      index: d.getDate() - 1,
      sum: sum
    }));
  }

  return (
    <div>
      <h2>Today spend:</h2>
      <div>
        <input type="number" onChange={e => {setSum(e.target.value)}}/>
        <button onClick = {handleClick} > Confirm </button>
      </div>
    </div>
  )
}

export default SpendInput
