import React from 'react'
import './chooseModal.css'

function CategoryModal({isOpen, sum, close}) {
    if (isOpen) {
        return (
            <div className='modal'>
                <div className="spend">-{sum}</div>
                <div className="category">
                    <div className="container">
                        <div className="select">
                            <select>
                                <option value="1">Americano</option>
                                <option value="2">Latte</option>
                                <option value="3">Green Tea</option>
                            </select>
                        </div>
                        <button className='modal_btn' onClick={() => close(false)}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryModal;
