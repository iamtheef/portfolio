import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

const About: React.FC = () => {
  const { getContent, getTags } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const { PROFILE, EDUCATION, LANG_ARRAY, SOFT_SKILLS } = getContent();
  const { aboutMe } = getTags();

  return (
    <div>
      <div
        className={`container paragraph marginTop ${
          isDark ? "dark-paragraph" : ""
        }`}
      >
        <div className="row">
          <div className="col-10">
            <h1 className="intro">{aboutMe.profile}</h1>
            <p className={`paragraph ${isDark ? "dark-paragraph" : ""}`}>
              {PROFILE}
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h3 className="intro">{aboutMe.skills}</h3>
            <div className="row">
              <div className="col-md-6">
                <h5 className="mt-3">Tools</h5>
                <ul style={{ listStyleType: "none", paddingLeft: "1.2rem" }}>
                  <li>– TypeScript/JavaScript</li>
                  <li>– React/Next.js</li>
                  <li>– Rest API Design</li>
                  <li>– Python</li>
                  <li>– GraphQL</li>
                  <li>– Node</li>
                  <li>– SQL/NoSQL and Graph Databases/Neo4j</li>
                  <li>– BigQuery</li>
                  <li>– HTML/CSS + frameworks (Bootstrap etc.)</li>
                  <li>– FastAPI</li>
                  <li>– Flask</li>
                  <li>– Django</li>
                  <li>– Bash scripting</li>
                  <li>– Web scraping</li>
                  <li>– Web sockets</li>
                  <li>– Express</li>
                  <li>– Docker</li>
                  <li>– Testing</li>
                  <li>– Redis</li>
                  <li>– MinIO</li>
                  <li>– Git</li>
                  <li>– ElasticSearch</li>
                  <li>– Keycloak</li>
                  <li>– K8s</li>
                  <li>– Github Actions</li>
                  <li>– Azure</li>
                  <li>– Google Cloud Platform</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="mt-3">Skills</h5>
                <ul style={{ listStyleType: "none", paddingLeft: "1.2rem" }}>
                  {SOFT_SKILLS.map((skill: string, i: number) => (
                    <li key={i}>– {skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-12">
            <h1 className="intro">{aboutMe.education}</h1>
          </div>

          <div className="col-12">
            <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem" }}>
              <li>
                <strong>{EDUCATION}</strong>
              </li>
              <li>
                <strong>
                  Software Design and Architecture — Coursera (Dec 2023)
                </strong>
              </li>
              <li>
                <strong>Python — TestDome (Jun 2021)</strong>
              </li>
              <li>
                <strong>React — TestDome (Mar 2021)</strong>
              </li>
              <li>
                <strong>Udemy Bootcamps:</strong>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: "0.2rem",
                    marginTop: "0.4rem",
                  }}
                >
                  <li>– JavaScript Algorithms & Data Structures Masterclass</li>
                  <li>– Machine Learning A-Z with Python</li>
                  <li>– Advanced JavaScript Concepts</li>
                  <li>– Ethical Hacking from Scratch</li>
                  <li>– Many more</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h1 className="intro">{aboutMe.books}</h1>
            <ul>
              <li>
                – Clean Code: A Handbook of Agile Software Craftsmanship –
                Robert C. Martin
              </li>
              <li>
                {" "}
                – Designing Data-Intensive Applications – Martin Kleppmann
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h1 className="intro">{aboutMe.languages}</h1>
            <ul>
              {LANG_ARRAY.map((l: string, i: number) => (
                <li key={i}>– {l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
