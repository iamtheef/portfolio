import React, { useContext } from "react";
import { getColor } from "../utils/getColor";
import { LanguageContext } from "../Context/LanguageContext";
interface Props {
  title: string;
  description: string;
  url: string;
  language: string;
  outline: boolean;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const { title, description, url, language, outline } = props;
  const { isGreek } = useContext(LanguageContext);
  return (
    <div className="card" style={{ width: "auto" }}>
      <div className={`card-body ${outline && "spotlight"}`}>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <a className="mb-2" href={url}>
                {title}
              </a>
              <p className="card-description" style={{ marginTop: "10px" }}>
                {description}
              </p>
              <p
                className="card-text"
                style={{ color: `#${getColor(language)}`, fontSize: "13px" }}
              >
                {language}
              </p>
            </div>
            <div className="col-3">
              <a
                href={url}
                className="btn project-btn"
                style={{ float: "right", marginRight: -20 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isGreek() ? "Δείτε τον κώδικα" : "View repository"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
