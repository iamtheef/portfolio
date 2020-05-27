import React, { useEffect, useState, useContext } from "react";
import Loader from "../assets/Loader";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import postit from "../assets/postit.gif";
import graphql from "../assets/graphql.png";
import { LanguageContext } from "../Context/LanguageContext";

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const Projects: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [projects, setProjects] = useState<any>();
  const { isGreek } = useContext(LanguageContext);

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
    <div className="container" style={{ marginTop: "-1700px" }}>
      <h3 className="intro">{isGreek() ? "Επιφανή" : "Spotlight"}:</h3>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <img
              className="card-img-top"
              src={graphql}
              style={{ height: "auto", maxHeight: "246px" }}
              alt="server img"
            />
            <div className="card-body">
              <h5 className="card-title">GraphQL - TypeScript boilerplate</h5>
              <p className="card-text">
                A fully equiped boilerplate with GraphQL & TypeScript
              </p>
              <a
                href="https://github.com/iamtheef/GraphQL_boilerplate "
                className="btn project-btn"
              >
                View repository
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img className="card-img-top" src={postit} alt="postit gif" />
            <div className="card-body">
              <h5 className="card-title">Postit</h5>
              <p className="card-text">
                A reddit clone. Find walkthrough gifs in the Github repository.
              </p>
              <a
                href=" https://github.com/iamtheef/Post-It"
                className="btn project-btn"
              >
                View repository
              </a>
            </div>
          </div>
        </div>
      </div>

      <h3 className="intro mt-5">{isGreek() ? "Τρέχων" : "Current"}:</h3>
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

export default Projects;
