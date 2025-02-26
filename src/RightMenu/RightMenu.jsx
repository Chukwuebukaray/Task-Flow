import React from "react";
import "./RightMenu.css";
import frame8 from "../assets/Frame 8.png";
import vector from "../assets/Vector.png";
import paper from "../assets/Paper.png";


const RightMenu = () => {
  return (
    <div className="rightmenu">
      <div className="frame52">
        <div className="frame50">Todos</div>
        <div>
          <img src={frame8} />
        </div>
      </div>
      <div className="todos">
        <div className="todobox">
          <div className="todo checked">
            <input type="checkbox" checked />
            Donate $500 to the charity
          </div>
          <div className="down">
            <div className="categories">
              <text className="category yellow">Donations</text>
              <text className="category green">Social</text>
            </div>
            <div className="date">May 20, 2020</div>
          </div>
        </div>
        <div className="todobox">
          <div className="todo">
            <input type="checkbox" />
            Do 500 Pushups
          </div>
          <div className="down">
            <div className="categories">
              <text className="category cyan">Sport</text>
              <text className="category red">Selfcare</text>
            </div>
            <div className="date">May 20, 2020</div>
          </div>
        </div>
        <div className="todobox">
          <div className="todo checked">
            <input type="checkbox" checked />
            Buy new headset
          </div>
          <div className="down">
            <div className="categories">
              <text className="category purple">Shopping</text>
              <text className="category green">Set-up</text>
            </div>
            <div className="date">May 20, 2020</div>
          </div>
        </div>
        <div className="todobox">
          <div className="todo">
            <input type="checkbox" />
            Clean the room
          </div>
          <div className="down">
            <div className="categories">
              <text className="category blue">Selfcare</text>
            </div>
            <div className="date">May 20, 2020</div>
          </div>
        </div>
      </div>
      <div className="notes">
        <div className="frame52">
          <div className="frame50">Notes</div>
          <div><img src={frame8} /></div>
        </div>
        <div className="calendarbox">
          <div className="frame74">
            <div className="date">
              <img src={paper} /> Apr 2, 2023
            </div>
            <div>
              <img src={vector} />
            </div>
          </div>
          <div className="note">
            <h4>ChatGPT Tricks for business marketing</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui
              mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu
              slorem ipsum dolor sit amet
            </p>
          </div>
          <div className="categories">
            <text className="category red">Tech</text>
            <text className="category green">AI</text>
          </div>
        </div>
        <div className="calendarbox">
          <div className="frame74">
            <div className="date">
              <img src={paper} /> Apr 3, 2023
            </div>
            <div>
              <img src={vector} />
            </div>
          </div>
          <div className="note">
            <h4>Notes on being a successful entrepreneur</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui
              mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu
              slorem ipsum dolor sit amet
            </p>
          </div>
          <div className="categories">
            <text className="category cyan">Learning</text>
            <text className="category blue">Self-improvement</text>
          </div>
        </div>
        <div className="calendarbox">
          <div className="frame74">
            <div className="date">
              <img src={paper} /> Apr 4, 2023
            </div>
            <div>
              <img src={vector} />
            </div>
          </div>
          <div className="note">
            <h4>
              What are my life Goals and what I'm currently doing to acheive
              them
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui
              mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu
              slorem ipsum dolor sit amet
            </p>
          </div>
          <div className="categories">
            <text className="category red">Profitable</text>
            <text className="category blue">Profitable</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
