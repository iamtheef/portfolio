import React, { useEffect, useState } from "react";
import Loader from "../utils/Loader";
import axios from "axios";
import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

export default function Projects() {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState<any>();
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
      <h3 className="intro">Current:</h3>
      {projects.map((project: Project) => (
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
}
