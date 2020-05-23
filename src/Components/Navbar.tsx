import React from "react";
import { Link } from "react-router-dom";
export const Navbar: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="container">
        <div className="row navbar">
          <div className="col">
            <div className="row">
              <Link
                to="/"
                className="col-lg navbar-button"
                onClick={() => console.log("HOME!")}
              >
                Home
              </Link>
              <Link className="col-lg navbar-button" to="/projects">
                Projects
              </Link>
              <Link className="col-lg navbar-button" to="/about">
                About Me
              </Link>
              <Link className="col-lg navbar-button" to="contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="col-md"></div>
        </div>
      </div>
    </div>
  );
};
