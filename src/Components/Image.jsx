import React from "react";
import product from "../products.js";

const Image = () => {
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%" }}
      ></img>
    </div>
  );
};

export default Image;
