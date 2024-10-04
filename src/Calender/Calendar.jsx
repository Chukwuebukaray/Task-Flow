import React from "react";
import "./Calendar.css";
import paper from "../assets/paper.png";
import calendar from "../assets/calendar.png";
import calendarwhite from "../assets/calendarwhite.png";
import category from "../assets/category.png";
import tags from "../assets/tags.png";
import options from "../assets/Options.png";
import open from "../assets/Open.png";
import inprogress from "../assets/InProgress.png";
import done from "../assets/Done.png";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="group12">
        <div className="calendarhead">
          <img src={calendarwhite} />
          Calendar
        </div>
        <div className="kanban">
          <img src={category} />
          Kanban
        </div>
        <div className="list">
          <img src={tags} />
          List
        </div>
      </div>
      <div className="frame63">
        <div className="frame60">
          <div className="frame52">
            <div className="frame50">
              <img src={open} />
              Open
            </div>
            <div className="options">
              <img src={options} />
            </div>
          </div>
          <div className="frame59">
            <div className="calendarbox">
              <div className="categories">
                <text className="category purple">Economic</text>
                <text className="category green">Finance</text>
              </div>
              <br></br>
              <div className="task">
                <img src={paper} />
                Manage Finances
              </div>
              <br></br>
              <div className="nameandpriority">
                <text className="username">@ mustafa</text>
                <text className="username">High</text>
              </div>
            </div>
            <div className="calendarbox">
              <div className="categories">
                <text className="category cyan">Marketing </text>
                <text className="category green">Social</text>{" "}
                <text className="category blue">Contents</text>
              </div>
              <br></br>
              <div className="task">
                <img src={paper} />
                Fix Intagram content issues
              </div>
              <br></br>
              <div className="nameandpriority">
                <text className="username">@ mustafa</text>
                <text className="username">Small</text>
              </div>
            </div>
            <div className="calendarbox">
              <div className="categories">
                <text className="category red">Website</text>{" "}
                <text className="category green"> AI</text>
              </div>
              <br></br>
              <div className="task">
                <img src={paper} />
                Integrate ChatGPT
              </div>
              <br></br>
              <div className="nameandpriority">
                <text className="username">@ mustafa</text>
                <text className="username">Small</text>
              </div>
            </div>
          </div>
        </div>
        <div className="frame61">
          <div className="frame52">
            <div className="frame50">
              <img src={inprogress} />
              In Progress
            </div>
            <div className="options">
              <img src={options} />
            </div>
          </div>
          <div className="frame59">
            <div className="calendarbox">
              <div className="categories">
                <text className="category purple">Visual ID</text>
                <text className="category green">Design</text>
                <text className="category blue">logo</text>
              </div>
              <br></br>
              <div className="task">
                <img src={paper} /> Redesign The logo
              </div>
              <br></br>
              <div className="nameandpriority">
                <text className="username">@ mustafa</text>
                <text className="username">Small</text>
              </div>
            </div>
            <div className="calendarbox">
              <div className="categories">
                <text className="category cyan">Marketing</text>
              </div>
              <br></br>
              <div className="task">
                <img src={paper} /> Start the new marketing strategy
              </div>
              <br></br>
              <div className="nameandpriority">
                <text className="username">@ mustafa</text>
                <text className="username">Medium</text>
              </div>
            </div>
            <div className="calendarbox">
              <div className="categories">
                <text className="category cyan">Commerce</text>
              </div>
              <br></br>
              <div className="task">
                <img src={paper} />
                Cancel the shop gifts
              </div>
              <br></br>
              <div className="nameandpriority">
                <text className="username">@ mustafa</text>
                <text className="username">Small</text>
              </div>
            </div>
          </div>
        </div>
        <div className="frame62">
          <div className="frame52">
            <div className="frame50">
              <img src={done} />
              Done
            </div>
            <div className="options">
              <img src={options} />
            </div>
          </div>
          <div className="frame59">
            <div className="calendarbox">
              <div className="categories">
                <text className="category green">Website </text>
                <text className="category red"> Courses</text>
              </div>
              <br></br>
              <div className="task">
                <img src={paper} />
                Start how to use the service Courses
              </div>
              <br></br>
              <div className="nameandpriority">
                <text className="username">@ ahmed</text>
                <text className="username">Very High</text>
              </div>
            </div>
            <div className="calendarbox">
              <div className="categories">
                <text className="category purple">Website </text>
                <text className="category green">Marketing</text>
              </div>
              <br></br>
              <div className="task">
                <img src={paper} />
                Promote the website
              </div>
              <br></br>
              <div className="nameandpriority">
                <text className="username">@ mustafa</text>
                <text className="username">Medium</text>
              </div>
            </div>
            <div className="calendarbox">
              <div className="categories">
                <text className="category red">Website</text>
              </div>
              <br></br>
              <div className="task">
                <img src={paper} />
                Integrate help center
              </div>
              <br></br>
              <div className="nameandpriority">
                <text className="username">@ mustafa</text>
                <text className="username">Small</text>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
