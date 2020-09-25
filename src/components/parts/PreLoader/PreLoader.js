import React from "react";
import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div class="containerLoader">
      <svg class="loadScreen" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#E2007C" />
        <circle cx="170" cy="170" r="135" stroke="#404041" />
        <circle cx="170" cy="170" r="110" stroke="#E2007C" />
        <circle cx="170" cy="170" r="85" stroke="#404041" />
      </svg>
    </div>
  );
};

export default PreLoader;
