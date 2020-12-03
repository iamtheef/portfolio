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
  const { isGreek } = useContext(LanguageContext);

  return (
    <div className="col-6">
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
              {isGreek() ? "Δείτε τον backend κώδικα" : "View backend repo"}
            </a>
          )}
          {links.repo && (
            <a
              href={links.backEnd}
              className="btn project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isGreek() ? "Δείτε τον κώδικα" : "View repository"}
            </a>
          )}
          {links.frontEnd && (
            <a
              href={links.frontEnd}
              className="btn project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isGreek() ? "Δείτε τον frontend κώδικα" : "View frontend repo"}
            </a>
          )}
          {links.deployedAt && (
            <a
              href={links.deployedAt}
              className="btn project-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isGreek() ? "Δείτε την εφαρμογή" : "Visit app"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Highlight;
