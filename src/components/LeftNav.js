import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import updateIcon from "../images/icons/updates-icon.png";
import taskIcon from "../images/icons/task-icon.png";
import projectIcon from "../images/icons/project-icon.png";
import documentIcon from "../images/icons/document-icon.png";
import issueIcon from "../images/icons/issue-icon.png";
import hoursIcon from "../images/icons/hours-icon.png";
import peopleIcon from "../images/icons/people-icon.png";

const LeftNav = ({ setHeaderTitle, totalDoc }) => {
  const updateTitle = (e) => {
    setHeaderTitle(e.target.innerText);
  };
  console.log("imran ", totalDoc)
  return (
    <>
      <div className="left-nav">
        <div className="container-fluid pl-2">
          <ul>
            <li>
              <NavLink to="updates" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={updateIcon} alt="" />
                </span>
                <span>Updates</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="tasks" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={taskIcon} alt="" />
                </span>
                <span>Tasks</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="overview" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={projectIcon} alt="" />
                </span>
                <span>Project Details</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="documents" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={documentIcon} alt="" />
                </span>
                <span>Documents {totalDoc}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="issue" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={issueIcon} alt="" />
                </span>
                <span>Issue</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="hours" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={hoursIcon} alt="" />
                </span>
                <span>Hours</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="people" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={peopleIcon} alt="" />
                </span>
                <span>People</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
