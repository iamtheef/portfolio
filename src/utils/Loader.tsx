import React from "react";
import loader from "../icons/loading-icon.png";

export default function Loader() {
  return (
    <div className="blink">
      <div className="container">
        <div className="row">
          <div
            className="col-6"
            style={{ marginTop: "-400px", marginLeft: "40%" }}
          >
            <img src={loader} alt="loader icon" className="loaderIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
