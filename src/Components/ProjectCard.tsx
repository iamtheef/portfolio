import React from "react";
import { getColor } from "../utils/getColor";

interface Props {
  title: string;
  description: string;
  url: string;
  language: string;
  outline: boolean;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const { title, description, url, language, outline } = props;

  return (
    <div className="card" style={{ width: "80%" }}>
      <div className={`card-body ${outline && "spotlight"}`}>
        <div className="container">
          <div className="row">
            <div className="col-10">
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
            <div className="col-2">
              <a href={url} className="btn project-btn">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
