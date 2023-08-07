import React from "react";
import './index.css'
import Header from "./components/header/Header";
import Calendar from "./components/calendar/Calendar";
import SpendInput from "./components/input/SpendInput";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main_part">
        <Calendar></Calendar>
        <SpendInput></SpendInput>
      </main>
      
    </div>
  );
}

export default App;
