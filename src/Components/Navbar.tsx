import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleScrollNavigate = (path: string) => {
    if (path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(path, { replace: true });
    } else {
      const target = document.querySelector(`[data-path="${path}"]`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        navigate(path, { replace: true });
      }
    }
  };

  const linkClass = (path: string) => {
    const hashPath = `#${path === "/" ? "/" : path}`;
    return `col-lg ${isDark ? "dark-" : ""}navbar-button ${
      isActive(hashPath) ? "active" : ""
    }`;
  };

  return (
    <div
      className="mt-4"
      style={{
        position: "sticky",
        top: 0,
        background: `${isDark ? "#000000" : "#f7f7f7"}`,
        zIndex: 10000,
      }}
    >
      <div className="container">
        <div className="row navbar">
          <div className="col">
            <div className="row pt-2">
              <button
                onClick={() => handleScrollNavigate("/")}
                className={linkClass("/")}
              >
                {home}
              </button>
              <button
                onClick={() => handleScrollNavigate("/experience")}
                className={linkClass("/experience")}
              >
                {experience}
              </button>
              <button
                onClick={() => handleScrollNavigate("/about")}
                className={linkClass("/about")}
              >
                {aboutMe}
              </button>
              <button
                onClick={() => handleScrollNavigate("/contact")}
                className={linkClass("/contact")}
              >
                {contact}
              </button>
            </div>
          </div>

          <div className="pl-3">
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
            >
              {language}
            </button>
            <div
              style={{ marginLeft: "-170%" }}
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
