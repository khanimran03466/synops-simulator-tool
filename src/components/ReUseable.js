import React, {useState} from "react";
import { Outlet } from 'react-router-dom';
import LeftNav from "./LeftNav";

import minimizeIcon from "./../images/icons/minimize-icon.png";

const ReUseable = ({headerImage, totalDoc}) => {

  const [headerTitle, setHeaderTitle] = useState("Updates")
  return (
    <>
      <div className="head">
        <img src={headerImage} alt="head" />
        <div className="title-header px-3 py-3">
          <span className="left-icon">
            <img src={minimizeIcon} alt="" />
          </span>
          {headerTitle}
        </div>
      </div>
      <div className="main-body">
        <LeftNav setHeaderTitle={setHeaderTitle} totalDoc={totalDoc} />
        <Outlet />
      </div>
    </>
  );
};

export default ReUseable;
