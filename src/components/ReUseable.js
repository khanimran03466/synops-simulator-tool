import React, {useState} from "react";
import { Outlet } from 'react-router-dom';
import LeftNav from "./LeftNav";

const ReUseable = ({
  headerImg,
  minimizeIcon,
}) => {
  const [headerTitle, setHeaderTitle] = useState("Updates")
  return (
    <>
      <div className="head">
        <img src={headerImg} alt="head" />
        <div className="title-header px-3 py-3">
          <span className="left-icon">
            <img src={minimizeIcon} alt="" />
          </span>
          {headerTitle}
        </div>
      </div>
      <div className="main-body">
        <LeftNav setHeaderTitle={setHeaderTitle} />
        <Outlet />
      </div>
    </>
  );
};

export default ReUseable;
