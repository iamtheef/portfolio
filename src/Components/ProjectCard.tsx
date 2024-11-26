import React, { useContext } from "react";
// import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

interface Props {
  name: string;
  description: string;
  duration: string;
  company: string;
  skills: string[];
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const { name, description, skills } = props;
  // const { getTags } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`${isDark ? "dark-" : ""}gradient-bg card`}
      style={{ width: "auto" }}
    >
      <div className={`${isDark ? "dark-" : ""}card-body`}>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <a className="mb-2" href="/">
                {name}
              </a>
              <p className="card-description" style={{ marginTop: "10px" }}>
                {description}
              </p>
              <p
                className="card-text"
                style={{ fontWeight:"bold" ,fontSize: "13px" }}
              >
                Skills
              </p>
              <p
                className="card-text"
                style={{ fontSize: "13px", marginTop: "-10px" }}
              >
                 {skills.join(" · ")}
              </p>
            </div>
            {/* <div className="col-3">
              <a
                href={"url"}
                className="btn project-btn"
                style={{ float: "right", marginRight: -20 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getTags().experience.buttons.viewRepo}
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
