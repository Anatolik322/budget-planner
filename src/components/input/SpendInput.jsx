import React, {useState} from 'react'
import { addSpend, setTotal } from '../../service/amountSlice'
import { useDispatch } from "react-redux"
import CategoryModal from '../categoryModal/CategoryModal';
import './spendInput.css'

function SpendInput({title}) {
  
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
    disp(setTotal(-sum))
  }

  return (
    <>
      {modal ? 
      <CategoryModal isOpen={true} sum={sum} close = {setmodal}></CategoryModal>
      :
      <div className='input'>
      <h2>{title}</h2>
      <div>
        <input type="number" onChange={e => {setSum( +e.target.value)}}/>
        <button onClick = {
          sum !== 0 ? handleClick : undefined
        } > Confirm </button>
      </div>
    </div>}
    </>
    
  )
}

export default SpendInput
