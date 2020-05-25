import React, { useEffect, useState } from "react";
import Loader from "../utils/Loader";
import axios from "axios";

interface Project {
  name: string;
  description: string;
  html_url: string;
}

export default function Projects() {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState<any>();
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://api.github.com/users/iamtheef/repos")
        .then((projects) => {
          setProjects(projects.data);
          setLoaded(true);
        })
        .catch((e) => {
          console.error(e.message);
        });
    }, 1000);
  }, []);
  if (!loaded) return <Loader />;
  return (
    <div className="conainer marginTop">
      <div className="row">
        <div className="col-12">
          <ul>
            {projects &&
              projects.map((project: Project) => (
                <li key={project.html_url}>{project.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
