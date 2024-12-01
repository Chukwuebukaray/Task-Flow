import React from "react";
import "./Sidebar.css";
import logo from "../assets/logo.png";
import category from "../assets/Category.png";
import vector from "../assets/Vector 1.png";
import user from "../assets/Rectangle 5.png";
import flowershop from "../assets/Flowershop.png";
import cloth from "../assets/Cloth.png";
import gamerboy from "../assets/Gamerboy.png";
import calender from "../assets/Calendar.png";
import analytics from "../assets/Analytics.png";
import activity from "../assets/Activity.png";
import folder from "../assets/Folder.png";
import settings from "../assets/Settings.png";
import paper from "../assets/Paper.png";
import video from "../assets/Video.png";
import wallet from "../assets/Wallet.png";
import frame8 from "../assets/Frame 8.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>TaskFlow</h3>
      </div>
      <div className="menu">
        <ul>
          <li className="fili">
            <img src={category} />
            Overview <img src={vector} className="dropdown" />
          </li>
          <li>
            <img src={calender} />
            Calendar
          </li>
          <li>
            <img src={analytics} />
            Analytics
          </li>
          <li>
            <img src={activity} />
            Activity
          </li>
          <li className="lali">
            <img src={folder} />
            Projects
          </li>
        </ul>
      </div>
      <div className="projects">
        <div className="heading">
          <h2>PROJECTS</h2>
          <img src={frame8} alt="" />
        </div>
        <ul>
          <li>
            <text>
              <img src={flowershop} alt="" /> Flower Shop
            </text>{" "}
            23
          </li>
          <li>
            <text>
              <img src={cloth} alt="" /> Cloth{" "}
            </text>
            <div className="video">
              <img src={video} />
              345
            </div>
          </li>
          <li>
            <text>
              <img src={gamerboy} alt="" /> Gamer Boy
            </text>{" "}
            <div className="wallet">
              <img src={wallet} />
              568
            </div>
          </li>
        </ul>
      </div>
      <div className="tasks">
        <div className="heading">
          <h2>TASKS </h2>
          <img src={frame8} alt="" />
        </div>
        <ul>
          <li>
            <text>
              <img src={paper} alt="" />
              Manage Finances
            </text>
            52
          </li>
          <li>
            <text>
              <img src={paper} alt="" /> Integrate ChatGPT
            </text>
            15
          </li>
          <li>
            <text>
              <img src={paper} alt="" /> Redesign the logo
            </text>
            5
          </li>
          <li>
            <text>
              <img src={paper} alt="" /> Invest in DOGE
            </text>
            2
          </li>
        </ul>
      </div>

      <div className="user">
        <div className="user-info">
          <img src={user} alt="" />
          <div className="user-infotext">
            <h3> Muhammed Ali</h3>
            <span>Free Account</span>
          </div>
        </div>
        <img src={settings} alt="" className="settings" />
      </div>
    </div>
  );
};

export default Sidebar;
