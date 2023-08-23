import React from 'react'
import './stats.css'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';
import Header from '../header/Header';
import Footer from '../footer/Footer'
function Stats() {
    
    const data = useSelector(state => state.categories)
    const options = {
        title: "My expenses",
    };

    return (
    <div className='stats'>
        <Header></Header>
        <Chart
        className='chart'
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
        />
        <Footer></Footer>
    </div>
  )
}

export default Stats;
