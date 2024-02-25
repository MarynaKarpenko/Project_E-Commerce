import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigation">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          unde, inventore laborum quisquam similique illum molestias ducimus
          placeat aut optio accusamus illo explicabo! Placeat inventore quidem
          enim. Error, adipisci inventore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          unde, inventore laborum quisquam similique illum molestias ducimus
          placeat aut optio accusamus illo explicabo! Placeat inventore quidem
          enim. Error, adipisci inventore?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
