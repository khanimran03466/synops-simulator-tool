import React from "react";

const ImageContainer = ({ images }) => {
  return (
    <>
      <div className="pl-1">
        <div className="right-img-cont">
          {
            images.map((image) => <img src={image} alt="" key={(Math.random()*100)}/>)
          }
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
