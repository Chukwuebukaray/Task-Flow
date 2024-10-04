import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar.jsx";
import RightMenu from "./RightMenu/RightMenu.jsx";
import "./App.css";
import Overview from "./Overview/Overview.jsx";
import Calender from "./Calender/Calendar.jsx";

function App() {
  return (
    <>
      <div className="element">
        <Sidebar />
        <div className="middle">
          <Overview />
          <Calender />
        </div>
        <RightMenu />
      </div>
    </>
  );
}

export default App;
