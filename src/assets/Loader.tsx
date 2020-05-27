import React from "react";
import loader from "../assets/loading-icon.png";

export default function Loader() {
  return (
    <div className="blink">
      <div className="container text-center">
        <div className="row">
          <div
            className="col-6"
            style={{ marginTop: "-1500px", marginLeft: "25%" }}
          >
            <img src={loader} alt="loader icon" className="loaderIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
