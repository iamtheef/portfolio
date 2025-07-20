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
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setProjects(PROJECTS);
  }, [language, PROJECTS]);
  if (!loaded) return <Loader />;
  return (
    <div className="container marginTop">
      <div className="">
        <div className="col-12">
          <ul className="timeline">
            {WORK_EXP.map((exp: any, index: number) => (
              <React.Fragment key={`exp-${index}`}>
                <li className="timeline-item">
                  <div className="timeline-line" />
                  <div
                    className={`${isDark ? "dark-" : ""}glass-timeline-dot`}
                  />
                  <div className="timeline-content">
                    <ProjectCard
                      description={exp.description}
                      company={exp.company}
                      isGlass={true}
                      skills={[]}
                      name={exp.title}
                      duration={exp.period.text}
                    />
                  </div>
                </li>

                {projects
                  .filter((p: Project) => p.company === exp.title)
                  .map((project: Project, pIndex: number) => (
                    <li
                      key={`project-${index}-${pIndex}`}
                      className="timeline-item"
                    >
                      <div className="timeline-line" />
                      <div className={`${isDark ? "dark-" : ""}timeline-dot`} />
                      <div className="timeline-content">
                        <ProjectCard {...project} />
                      </div>
                    </li>
                  ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
