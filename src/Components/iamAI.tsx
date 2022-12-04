import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import iamAIPic from "../assets/iamAI-highlight.gif";

const IamAI: React.FC = () => {
  const { getTags, getContent } = useContext(LanguageContext);
  const { experience } = getTags();
  const { iamAI } = getContent().PINNED;

  const links = {
    frontEnd: "",
    backEnd: "https://rapidapi.com/eftihis.riise/api/iamai",
    deployedAt: "https://iamai.page/",
    repo: "",
  };

  return (
    <div className="col-12 mt-4">
      <div className="card iamAI-card">
        <img
          className="card-img iamAIPic"
          src={iamAIPic}
          alt="server img"
          style={{ opacity: "70%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{iamAI.TITLE}</h5>
          <p className="card-text">{iamAI.DESCRIPTION}</p>
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

export default IamAI;
