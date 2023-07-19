import React from "react";
import { NavLink } from 'react-router-dom';

import updateIcon from "../images/icons/updates-icon.png";

const LeftNav = ({setHeaderTitle}) => {
  const updateTitle = (e) => {
    setHeaderTitle(e.target.innerText)
  }
  return (
    <>
      <div className="left-nav">
        <div className="container-fluid">
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
                  <img src={updateIcon} alt="" />
                </span>
                <span>Tasks</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
