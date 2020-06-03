import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../Context/LanguageContext";
import isActive from "../utils/isActive";

export const Navbar: React.FC = () => {
  const { language, setLanguage, isGreek } = useContext(LanguageContext);

  return (
    <div className="mt-4">
      <div className="container">
        <div className="row navbar">
          <div className="col">
            <div className="row">
              <Link
                to="/"
                className={`col-lg navbar-button ${isActive("#/") && "active"}`}
              >
                {isGreek() ? "Αρχική" : "Home"}
              </Link>
              <Link
                className={`col-lg navbar-button ${
                  isActive("#/projects") && "active"
                }`}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className={`col-lg navbar-button ${
                  isActive("#/about") && "active"
                }`}
                to="/about"
              >
                {isGreek() ? "Σχετικά με εμένα" : "About Me"}
              </Link>
              <Link
                className={`col-lg navbar-button ${
                  isActive("#/contact") && "active"
                }`}
                to="/contact"
              >
                {isGreek() ? "Επικοινωνήστε" : "Contact"}
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
            >
              {language}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
