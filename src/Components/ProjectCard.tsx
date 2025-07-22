import React, { useContext } from "react";
// import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

interface Props {
  name: string;
  description: string;
  duration?: string;
  company: string;
  skills: string[];
  isGlass?: boolean;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  // const { getTags } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const { name, description, skills, isGlass = false, duration } = props;

  return (
    <div>
      <div className={isGlass ? `${isDark ? "dark-" : ""}card-body` : ""}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {isGlass ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <b>{name}</b>
                  <b className="duration-text-right">{duration}</b>
                </div>
              ) : (
                <a
                  className="mb-2"
                  href="/"
                  onClick={(e) => e.preventDefault()}
                >
                  {name}
                </a>
              )}
              {!isGlass && <div className="duration-text">{duration}</div>}
              <div className="col-9 pl-1">
                <p className={`${isDark ? "dark-" : ""}card-description`}>
                  {description}
                </p>
                {!isGlass && (
                  <>
                    <p className="card-text" style={{ fontWeight: "bold" }}>
                      Skills
                    </p>
                    <p className="card-text" style={{ marginTop: "-10px" }}>
                      {skills.join(" · ")}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
