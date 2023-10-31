import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import fileIcon from "../images/icons/file-icon.png"

// images

import topNavBar from "../images/home/homeTopNav.png";
import HomeWorkSpace from "../images/home/icons/home_workspaces.png";
import quetionMark from "../images/home/icons/quetionMark.png";
import pencil from "../images/home/icons/pencil.png";

const Home = () => {
  const [path, setPath] = useState("/");

  const pathHandler = (e) => {
    setPath(e.target.value);
  };

  return (
    <div className="home">
      <header>
        <img src={topNavBar} />
        <div className="top-header-cont">
          <div className="heading-cont container">
            <div className="left-sec">
              <h1> Good evening, User </h1>
              <ul>
                <li>
                  <button>My Week</button>
                </li>
                <li>
                  <button>
                    <img src={HomeWorkSpace} alt="Home Work Space" />0 Tasks due
                  </button>
                </li>
                <li>
                  <button>
                    <img src={HomeWorkSpace} alt="Home Work Space" />0 Tasks
                    complete
                  </button>
                </li>
              </ul>
            </div>
            <div className="right-sec">
              <div className="right-sec-wrapper">
                <img src={quetionMark} alt="quetion Mark" />
                <button>
                  <img src={pencil} alt="pencil" />
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="projects_box">
          <div className="my_project">
            <div className="top-sec">
              <div className="left">
                <h3> My Projects </h3>
              </div>
              <div className="Rightg">
                <span>...</span>
              </div>
            </div>
            <div className="second-sec">
              <div className="second_left">
                <Link to="/form"> New </Link>
              </div>
              <div className="second_right">
                <h3> Project I Own </h3>
              </div>
            </div>


            <div className="status_progress-sec">

              <div className="status_progress_tab">
                <span className="down-arrow"></span>
                <h3>Status: In Progress</h3>
              </div>

              <div className="progress_list">
                <ul>
                  <li> <img src={fileIcon} alt="file Icon" /> </li>
                  <li>  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="to_do"></div>
        </div>
      </div>

      <div className="selection-sec">
        <h2> Select Your Channel. </h2>
        <div className="select-op form-group">
          <select
            onChange={pathHandler}
            className="form-control dropdown-primary"
          >
            <option value="/"> Select </option>
            <option value="/ipad"> iPad </option>
            <option value="/epublish"> Epublish </option>
            <option value="/email"> Email </option>
            <option value="/banner"> Banner </option>
          </select>
          <Link to={path}>Select</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
