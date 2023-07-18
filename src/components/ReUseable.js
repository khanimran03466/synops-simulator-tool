import React from "react";

import updateIcon from "../images/icons/updates-icon.png";

const ReUseable = ({
  headerImg,
  minimizeIcon,
  titleHeader,
  rightImg1,
  rightImg2,
}) => {
  return (
    <>
      <div className="head">
        <img src={headerImg} alt="head" />
        <div className="title-header px-3 py-3">
          <span className="left-icon">
            <img src={minimizeIcon} alt="" />
          </span>
          {titleHeader}
        </div>
      </div>
      <div className="main-body">
        <div className="left-nav">
          <div className="container-fluid">
            <ul>
              <li>
                <span className="left-icon">
                    <img src={updateIcon} alt="" />
                </span>
                <span>Updates</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid">
          <div className="right-img-cont">
            <img src={rightImg1} alt="" />
            <img src={rightImg2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReUseable;
