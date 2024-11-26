import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";
import loadable from "@loadable/component";
import { calculateMonths } from "../utils/calculatePeriod";

const Loader = loadable(() => import("../assets/Loader"));
const ProjectCard = loadable(() => import("./ProjectCard"));

interface Project {
  name: string;
  description: string;
  duration: string;
  company: string;
  skills: string[];
  language: string;
}

const Experience: React.FC = () => {
  const { getContent } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const { WORK_EXP, PROJECTS } = getContent();
  const [loaded] = useState(true);
  const [projects, setProjects] = useState<any>(PROJECTS);
  const { getTags, language } = useContext(LanguageContext);
  const { aboutMe } = getTags();

  useEffect(()=> {
    setProjects(PROJECTS)
  }, [language, PROJECTS])
  if (!loaded) return <Loader />;
  return (
    <div className="container marginTop">
      <div className="row" style={{ marginTop: "5rem", marginLeft: "0.3rem" }}>
        <h1 className="intro">{aboutMe.experience}</h1>
        <div className="col-12">
          <ul>
            {WORK_EXP.map((exp: any, index: number) => (
              <li key={index}>
                <b style={{ fontFamily: "Nanum Gothic", fontSize: "20px" }}>
                  {exp.title}{" "}
                </b>
                <span>
                  <i style={{ color: "#60c8d6", marginLeft: "5px" }}>
                    {exp.period.text}{" "}
                    {calculateMonths(exp.period.date, language)}
                  </i>
                  <p>{exp.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="intro mt-5">{getTags().experience.recent}</h3>
      {projects.map((project: Project, i: number) => (
        <div className="row mb-4" key={project.name}>
          <div className="col-md">
            <ProjectCard
              name={project.name}
              description={project.description}
              company={project.company}
              duration={project.duration}
              skills={project.skills}
              // url={project.html_url}
            />
            <hr className={`${isDark ? "dark-" : ""}hr`}></hr>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
