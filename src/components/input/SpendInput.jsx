import React, {useState} from 'react'
import { addSpend } from '../../service/amountSlice'
import { useDispatch } from "react-redux"
import CategoryModal from '../categoryModal/CategoryModal';
import './spendInput.css'

function SpendInput() {
  
  const [sum, setSum] = useState(0);
  const [modal, setmodal] = useState(false);
  const disp = useDispatch();
  
  const handleClick = () => {
    setmodal(!modal);
    
    const d = new Date();
    disp(addSpend({
      index: d.getDate() - 1,
      sum: sum
    }));
  }

  return (
    <>
      {modal ? 
      <CategoryModal isOpen={true} sum={sum} close = {setmodal}></CategoryModal>
      :
      <div className='input'>
      <h2>Today spend:</h2>
      <div>
        <input type="number" onChange={e => {setSum( +e.target.value)}}/>
        <button onClick = {handleClick} > Confirm </button>
      </div>
    </div>}
    </>
    
  )
}

export default SpendInput
