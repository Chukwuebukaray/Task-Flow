import React from "react";
import "./Overview.css";
import vector2 from "../assets/Vector 2.png";
import vector3 from "../assets/Vector 3.png";
import folder from "../assets/Folder.png";
import TeamProjects from "../assets/Team Projects.png";
import Fashion from "../assets/Fashion.png";
import cloth from "../assets/Cloth.png";
import group6 from "../assets/Group 6.png";
import timecircle from "../assets/Time Circle.png";
import tags from "../assets/Tags.png";
import assign from "../assets/Assign.png";
import group from "../assets/Group.png";
import priority from "../assets/Priority.png";
import edit from "../assets/Edit.png";

const Overview = () => {
  return (
    <div className="overview">
      <div className="top">
        <div className="topleft">
          <div className="head">
            <div className="color"></div>
            <h1>Cloth</h1>
          </div>
          <div className="cloth">
            <img src={vector2} />
            <text className="folder">
              <img src={folder} />
              Projects
            </text>
            <img src={vector3} />
            <text className="teamprojects">
              <img src={TeamProjects} />
              Team Projects
            </text>
            <img src={vector3} />
            <text className="fashion">
              <img src={Fashion} />
              Fashion
            </text>
          </div>
        </div>
        <div className="topright">
          <img src={group6} alt="edit" />
        </div>
      </div>
      <div className="hero">
        <div className="headline">
          <img src={cloth} alt="" />
          <div>
            <h2>Cloth</h2>
            <p>Small and Consice headline</p>
          </div>
        </div>
        <div className="timeframe">
          <div className="created">
            <h2>CREATED</h2>
            <p>Mar 23, 10:34 PM</p>
          </div>
          <div className="deadline">
            <h2>DEADLINE</h2>
            <p>Jun 02, 04:01 PM</p>
          </div>
          <div className="hours">
            <h2>TRACKED TIME</h2>
            <p>10H 32M</p>
          </div>
        </div>
      </div>
      <div className="detailsAndDescription">
        <div className="details">
          <div className="info">
            <div className="tags">
              <img src={timecircle} alt="" /> Created at
            </div>
            <div className="right">May 15 20222 14:23 PM</div>
          </div>

          <div className="info">
            <div className="tags">
              <img src={tags} alt="" />
              Tags
            </div>
            <div className="categories right">
              <text className="category red">Profitable</text>
              <text className="category green">AI</text>
              <text className="category blue">1 Person</text>
            </div>
          </div>

          <div className="info">
            <div className="tags">
              <img src={assign} alt="" />
              Assign
            </div>
            <div className="right">
              <div className="username">@ mustafa</div>
            </div>
          </div>

          <div className="info">
            <div className="tags">
              <img src={group} alt="" />
              Group
            </div>
            <div className="right">
              Team projects <img src={vector3} /> Fashion
            </div>
          </div>

          <div className="info">
            <div className="tags">
              <img src={priority} alt="" />
              Priority
            </div>
            <div className="right">
              <div className="username">Small</div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="description">
          <h4>Description</h4>
          <p>
            TaskFlow is an intuitive task management system designed to help
            teams collaborate and manage their projects with ease. It offers
            powerful features such as task tracking, project organization,
            scheduling, and communication tools to keep teams organized and on
            top of their projects. <img src={edit} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
