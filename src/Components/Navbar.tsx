import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../Context/LanguageContext";
import isActive from "../utils/isActive";

export const Navbar: React.FC = () => {
  const { language, setLanguage, getTags } = useContext(LanguageContext);
  const { home, experience, aboutMe, contact } = getTags().navbar;
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="mt-4">
      <div className="container">
        <div className="row navbar">
          <div className="col">
            <div className="row pt-2">
              <Link
                to="/"
                className={`col-lg navbar-button ${isActive("#/") && "active"}`}
              >
                {home}
              </Link>
              <Link
                to="/experience"
                className={`col-lg navbar-button ${
                  isActive("#/experience") && "active"
                }`}
              >
                {experience}
              </Link>
              <Link
                className={`col-lg navbar-button ${
                  isActive("#/about") && "active"
                }`}
                to="/about"
              >
                {aboutMe}
              </Link>
              <Link
                className={`col-lg navbar-button ${
                  isActive("#/contact") && "active"
                }`}
                to="/contact"
              >
                {contact}
              </Link>
            </div>
          </div>

          <div className="dropdown" onClick={() => setDropdown(!dropdown)}>
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            >
              {language}
            </button>
            <div
              // negative margin is to make the menu open to the left of the button's bottom
              style={{
                marginLeft: "-170%",
              }}
              className={`dropdown-menu ${dropdown && "expanded"}`}
              aria-labelledby="dropdownMenuButton"
            >
              <div className="dropdown-item" onClick={() => setLanguage("EN")}>
                EN
              </div>
              <div className="dropdown-item" onClick={() => setLanguage("GR")}>
                GR
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
