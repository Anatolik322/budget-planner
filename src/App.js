import React from "react";
import './index.css'
import Header from "./components/header/Header";
import Calendar from "./components/calendar/Calendar";
import SpendInput from "./components/input/SpendInput";
import IncimeModal from "./components/incomeModal/IncomeModal";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main_part">
        <SpendInput title={"Today spend:"}></SpendInput>
        <Calendar></Calendar>
      </main>
      <IncimeModal></IncimeModal>
      <Footer></Footer>
    </div>
  );
}

export default App;
