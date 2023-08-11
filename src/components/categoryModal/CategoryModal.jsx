import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSpendByCategory } from '../../service/amountSlice'
import './chooseModal.css'

function CategoryModal({isOpen, sum, close}) {
    const [value, setValue] = useState([]);
    const disp = useDispatch();
    if (isOpen) {
        return (
            <div className='modal'>
                <div className="spend">-{sum}</div>
                <div className="category">
                    <div className="container">
                        <div className="select">
                            <select onChange={(e) => setValue([e.target.value, sum])}>
                                <option value='Food'>Food</option>
                                <option value='Health'>Health</option>
                                <option value='Shelter'>Shelter</option>
                                <option value='Bills'>Bills</option>
                                <option value='Transport'>Transport</option>
                                <option value='Saving'>Saving</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>
                        <button className='modal_btn' onClick={() => {
                            close(false)
                            disp(addSpendByCategory(value))
                            }}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryModal;
