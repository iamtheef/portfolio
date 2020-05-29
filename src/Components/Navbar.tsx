import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { LanguageContext } from "../Context/LanguageContext";

export const Navbar: React.FC = () => {
  const { language, setLanguage, isGreek } = useContext(LanguageContext);
  const history = useHistory();

  return (
    <div className="mt-4">
      <div className="container">
        <div className="row navbar">
          <div className="col">
            <div className="row">
              <Link
                to="/"
                className="col-lg navbar-button"
                onClick={() => history.push("/")}
              >
                {isGreek() ? "Αρχική" : "Home"}
              </Link>
              <Link
                className="col-lg navbar-button"
                to="/projects"
                onClick={() => history.push("/projects")}
              >
                Projects
              </Link>
              <Link
                className="col-lg navbar-button"
                to="/about"
                onClick={() => history.push("/about")}
              >
                {isGreek() ? "Σχετικά με εμένα" : "About Me"}
              </Link>
              <Link
                className="col-lg navbar-button"
                to="/contact"
                onClick={() => history.push("/contact")}
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
