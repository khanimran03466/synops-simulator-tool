import React from "react";
import { NavLink } from "react-router-dom";
import { Steps } from "intro.js-react";

// Icons
import updateIcon from "../images/icons/updates-icon.png";
import taskIcon from "../images/icons/task-icon.png";
import projectIcon from "../images/icons/project-icon.png";
import documentIcon from "../images/icons/document-icon.png";
import issueIcon from "../images/icons/issue-icon.png";
import hoursIcon from "../images/icons/hours-icon.png";
import peopleIcon from "../images/icons/people-icon.png";
import homeIcon from "../images/icons/home-icon.png";
import { useEffect } from "react";

const LeftNav = ({ setHeaderTitle, totalDoc }) => {
  const updateTitle = (e) => {
    setHeaderTitle(e.target.innerText);
  };

  console.log("imran ", totalDoc);

  const steps = [
   
    {
      element: ".selector1",
      intro: "test 1",
      position: "right",
      tooltipClass: "myTooltipClass",
      // highlightClass: "myHighlightClass",
    },
    {
      element: ".selector2",
      intro: "test 2",
      position: "right"
    },
    {
      element: ".selector3",
      intro: "test 3",
      position: "right"
    },
  ];

  useEffect((e)=>{

   

  },[]);

  const onExit = () => {};

  

  return (
    <>
      <div className="left-nav">
        <div className="container-fluid pl-2">
          <ul>
            <li className="selector1">
              <NavLink to="updates" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={updateIcon} alt="" />
                </span>
                <span>Updates</span>
              </NavLink>
              {/* <Steps enabled={true} steps={steps} initialStep={0} onExit={onExit} /> */}
            </li>
            <li className="selector2">
              <NavLink to="tasks" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={taskIcon} alt="" />
                </span>
                <span>Tasks</span>
              </NavLink>
              {/* <Steps enabled={true} steps={steps} initialStep={0} onExit={onExit} /> */}
            </li>
            <li className="selector3">
              <NavLink to="overview" onClick={(e) => updateTitle(e)}>
                <span className="left-icon">
                  <img src={projectIcon} alt="" />
                </span>
                <span>Project Details</span>
              </NavLink>
              {/* <Steps enabled={true} steps={steps} initialStep={0} onExit={onExit} /> */}
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
          <ul>
            <li className="mb-1">
              <NavLink to="/">
                <span className="left-icon">
                  <img src={homeIcon} alt="Home icon" />
                </span>
                <span> Go to Home Page</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
