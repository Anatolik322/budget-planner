import React from 'react'

function SpendInput() {
  return (
    <div>
      <h2>Today spend:</h2>
      <form>
        <input type="number"/>
        <button onClick={(e) => e.preventDefault()}>Confirm</button>
      </form>
    </div>
  )
}

export default SpendInput
