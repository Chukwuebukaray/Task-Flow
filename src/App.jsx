import React from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import RightMenu from "./RightMenu/RightMenu.jsx";
import "./App.css";
import Overview from "./Overview/Overview.jsx";
import Calender from "./Calendar/Calendar.jsx";

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
