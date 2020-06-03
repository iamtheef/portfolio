import React from "react";
import loop from "../assets/loop.svg";

export default function Loader() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div
            className="col-6"
            style={{ marginTop: "-1800px", marginLeft: "25%" }}
          >
            <img src={loop} alt="loader icon" className="loaderIcon blink" />
          </div>
        </div>
      </div>
    </div>
  );
}
