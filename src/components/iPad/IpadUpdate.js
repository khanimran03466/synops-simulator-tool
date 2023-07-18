import React from "react";
import { useState } from "react";
import ReUseable from "../ReUseable";

import ipadHeader from "../../images/iPad/iPad-header.png";
import ipadUpdate1 from "../../images/iPad/iPadUpdate1.png";
import ipadUpdate2 from "../../images/iPad/iPadUpdate2.png";
import minimizeIcon from "../../images/icons/minimize-icon.png";


const IpadUpdate = () => {
  const [titleHeader, setTitleHeader] = useState("Update");
  return (
    <div className="ipad-synops">
      <ReUseable
        headerImg={ipadHeader}
        minimizeIcon={minimizeIcon}
        titleHeader={titleHeader}
        rightImg1={ipadUpdate1}
        rightImg2={ipadUpdate2}
      />
    </div>
  );
};

export default IpadUpdate;
