import React from 'react'
import './stats.css'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';
import Header from '../header/Header';
function Stats() {
    
    const data = useSelector(state => state.categories)
    const options = {
        title: "My Daily Activities",
    };

    return (
    <div className='stats'>
        <Header></Header>
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
        />
    </div>
  )
}

export default Stats;
