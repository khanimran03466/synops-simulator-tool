import React from "react";
import ReUseable from "../ReUseable";


import minimizeIcon from "../../images/icons/minimize-icon.png";


const IpadUpdate = ({headerImage}) => {
  return (
    <div className="ipad-synops">
      <ReUseable
        headerImg={headerImage}
        minimizeIcon={minimizeIcon}
      />
    </div>
  );
};

export default IpadUpdate;