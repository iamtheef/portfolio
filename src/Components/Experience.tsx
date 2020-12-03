import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import chatRoom from "../assets/chat-room.optimised.gif";
import ai from "../assets/ai-optimised.jpeg";
import { LanguageContext } from "../Context/LanguageContext";
import loadable from "@loadable/component";

const Loader = loadable(() => import("../assets/Loader"));
const ProjectCard = loadable(() => import("./ProjectCard"));
const Highlight = loadable(() => import("./Highlight"));

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

const Experience: React.FC = () => {
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
    <div className="container marginTop">
      <h3 className="intro">{isGreek() ? "Επιφανή" : "Spotlight"}:</h3>
      <div className="row">
        <Highlight
          title="Cat or Dog"
          description="An AI model trained to recognize cats and dogs."
          image={ai}
          links={{
            frontEnd: "https://github.com/iamtheef/CNN-client",
            backEnd: "https://github.com/iamtheef/Flask-CNN-API",
            deployedAt: "http://18.158.52.156",
          }}
        />

        <Highlight
          title="Chat Room"
          description="One-time messaging app with encrypted messages."
          image={chatRoom}
          links={{
            repo: "https://github.com/iamtheef/chat-room",
            deployedAt: "https://iamtheef-chat-room.herokuapp.com/",
          }}
        />
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

export default Experience;
