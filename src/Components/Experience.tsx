import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Context/LanguageContext";
import loadable from "@loadable/component";

const Loader = loadable(() => import("../assets/Loader"));
const ProjectCard = loadable(() => import("./ProjectCard"));
const Highlights = loadable(() => import("./Highlights"));

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const Experience: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState<any>();
  const { getTags } = useContext(LanguageContext);

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
      <Highlights />
      <h3 className="intro mt-5">{getTags().experience.current}:</h3>
      {projects.map((project: Project, i: number) => (
        <div className="row mb-4" key={project.html_url}>
          <div className="col-md">
            <ProjectCard
              title={project.name}
              description={project.description}
              url={project.html_url}
              language={project.language}
              outline={i === 0}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
