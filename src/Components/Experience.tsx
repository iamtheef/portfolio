import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Context/LanguageContext";
import loadable from "@loadable/component";

const Loader = loadable(() => import("../assets/Loader"));
const ProjectCard = loadable(() => import("./ProjectCard"));
const IamAI = loadable(() => import("./iamAI"));

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const Experience: React.FC = () => {
  const { getContent } = useContext(LanguageContext);
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState<any>();
  const { getTags } = useContext(LanguageContext);
  const { WORK_EXP } = getContent();
  const { aboutMe } = getTags();

  useEffect(() => {
    axios
      .get("https://api.github.com/users/iamtheef/repos?sort=created")
      .then((projects) => {
        setProjects(projects.data);
        setLoaded(true);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  if (!loaded) return <Loader />;
  return (
    <div className="container marginTop">
      <div>
        <h3 className="intro">{getTags().experience.pinned}:</h3>
        <div className="row" style={{ marginTop: "-2%" }}>
          <IamAI />
        </div>
      </div>
      <div className="row" style={{ marginTop: "5rem", marginLeft: "0.3rem" }}>
        <h1 className="intro">{aboutMe.experience}</h1>
        <div className="col-12">
          <ul>
            {WORK_EXP.map((exp: any) => (
              <li>
                <i>
                  <b>{exp.period}</b>
                </i>
                <p>{exp.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="intro mt-5">{getTags().experience.recent}:</h3>
      {projects.map((project: Project, i: number) => (
        <div className="row mb-4" key={project.html_url}>
          <div className="col-md">
            <ProjectCard
              title={project.name}
              description={project.description}
              url={project.html_url}
              language={project.language}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
