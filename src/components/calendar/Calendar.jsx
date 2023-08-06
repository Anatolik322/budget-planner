import React from 'react'
import "./calendar.css"

function Calendar() {
  let d = new Date()
  Date.prototype.daysInMonth = function() {
		let days = 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    let daysArr = []
    for(let i = 1; i <= days; i++){
      daysArr.push(i)
    }
    return daysArr;
	};
  console.log(d.daysInMonth(), d.getDate())
  const rows = [];
  for (let i = 0; i < d.daysInMonth().length; i += 7) {
    const rowCells = d.daysInMonth().slice(i, i + 7);
    rows.push(
      <tr key={i}>
        {rowCells.map((cellData, index) => (
          <td key={index}>{cellData}</td>
        ))}
      </tr>
    );
  }
  return (
    <div>
      <table class="table table-bordered text-center">
        
        <tbody>
          <tr>
            {
              // d.daysInMonth().map((e) => {
              //   if(e % 7 == 0){
              //     return <tr>
                       
              //     </tr>
                   
              //   }
              //   return <td>{e}</td>
              // })
              rows
            }
          </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Calendar
