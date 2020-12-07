import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

interface Props {
  title: string;
  description: string;
  image: string;
  links: {
    frontEnd?: string;
    backEnd?: string;
    deployedAt: string;
    repo?: string;
  };
}

const Highlight: React.FC<Props> = ({
  title,
  description,
  image,
  links,
}: Props) => {
  const { getTags } = useContext(LanguageContext);
  const { experience } = getTags();

  return (
    <div className="col-6 mt-4">
      <div className="card">
        <img className="card-img" src={image} alt="server img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {links.backEnd && (
            <a
              href={links.backEnd}
              className="btn project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.buttons.viewAPI}
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              className="btn project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.buttons.viewRepo}
            </a>
          )}
          {links.frontEnd && (
            <a
              href={links.frontEnd}
              className="btn project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.buttons.viewClient}
            </a>
          )}
          {links.deployedAt && (
            <a
              href={links.deployedAt}
              className="btn project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.buttons.visitApp}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Highlight;
