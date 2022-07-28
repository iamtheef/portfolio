import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";
import isActive from "../utils/isActive";
import moonDark from "../assets/moonDark.png";
import moonLight from "../assets/moonLight.png";

export const Navbar: React.FC = () => {
  const { language, setLanguage, getTags } = useContext(LanguageContext);
  const { isDark, setIsDark } = useContext(ThemeContext);
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
                className={`col-lg ${isDark ? "dark-" : ""}navbar-button ${
                  isActive("#/") ? "active" : ""
                }`}
              >
                {home}
              </Link>
              <Link
                to="/experience"
                className={`col-lg ${isDark ? "dark-" : ""}navbar-button ${
                  isActive("#/experience") && "active"
                }`}
              >
                {experience}
              </Link>
              <Link
                to="/about"
                className={`col-lg ${isDark ? "dark-" : ""}navbar-button ${
                  isActive("#/about") && "active"
                }`}
              >
                {aboutMe}
              </Link>
              <Link
                to="/contact"
                className={`col-lg ${isDark ? "dark-" : ""}navbar-button ${
                  isActive("#/contact") && "active"
                }`}
              >
                {contact}
              </Link>
            </div>
          </div>

          <div className="">
            <img
              className="night-mode-toggle-icon"
              src={isDark ? moonLight : moonDark}
              alt="toggle night mode"
              onClick={() => setIsDark!(!isDark)}
            />
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
