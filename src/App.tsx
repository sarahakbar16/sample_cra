import "./App.css";
import {  Route, Routes } from "react-router-dom";
import TableView from "./views/TableView";
import CardView from "./views/CardView";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TableView />} />
        <Route path="/cards" element={<CardView/>} />
      </Routes>
    </div>
  );
}



export default App;
