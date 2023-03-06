import React from "react";
import loop from "../assets/loop.svg";

export default function Loader() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div
            className="col-6"
            style={{ marginLeft: "15vw", marginTop: "-5vh" }}
          >
            <img src={loop} alt="loader icon" className="loaderIcon blink" />
          </div>
        </div>
      </div>
    </div>
  );
}
