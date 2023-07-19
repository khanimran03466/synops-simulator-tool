import React from "react";

const ImageContainer = ({ images }) => {
  return (
    <>
      <div className="container-fluid mr-0 pr-0">
        <div className="right-img-cont">
          {
            images.map((image) => <img src={image} alt="" />)
          }
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
