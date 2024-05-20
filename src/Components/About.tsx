import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
// import CVpic from "../assets/me.jpg";
// import CVpic from "../assets/me2.jpeg";

const About: React.FC = () => {
  const { getContent, getTags } = useContext(LanguageContext);
  const { PROFILE, EDUCATION, LANG_ARRAY } = getContent();
  const { aboutMe } = getTags();

  return (
    <div>
      <div className="container paragraph marginTop">
        <div className="row">
          <div className="col-10">
            <h1 className="intro">{getTags().aboutMe.profile}</h1>
            {<p className="paragraph">{PROFILE}</p>}
          </div>
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-12">
            <h3 className="intro">{aboutMe.skills}</h3>

            <ul>
              <li className="mt-3">Tools</li>
              <ul>
                <li>TypeScript/JavaScript</li>
                <li>React/Next.js</li>
                <li>Rest API Design</li>
                <li>Python</li>
                <li>GraphQL</li>
                <li>Node</li>
                <li>SQL/NoSQL and Graph Databases/Neo4j</li>
                <li>HTML/CSS + several frameworks (bootstrap etc.)</li>
                <li>FastAPI</li>
                <li>Bash scripting</li>
                <li>Web scraping</li>
                <li>Web sockets</li>
                <li>Express</li>
                <li>Docker</li>
                <li>Testing</li>
                <li>Redis</li>
                <li>MinIO</li>
                <li>Git</li>
                <li>ElasticSearch</li>
                <li>Keycloak</li>
                <li>K8s</li>
                <li>Github Actions</li>
              </ul>

              <li className="mt-3">Skills</li>
              <ul>
                <li>Analytical and problem solving abilities</li>
                <li>Performance optimization techniques</li>
                <li>Strong debugging skills</li>
                <li>Straight communication</li>
                <li>Eager to collaborate</li>
              </ul>
            </ul>
          </div>
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-12">
            <h1 className="intro">{aboutMe.education}</h1>
          </div>
          <div style={{ marginLeft: "2rem" }}>{EDUCATION}</div>

          <div className="col-12">
            <ul>
              <li>The Web Developer Bootcamp</li>
              <li>JavaScript Algorithms & Data Structures Masterclass</li>
              <li>Machine Learning A-Z with Python</li>
              <li>The Modern React Bootcamp</li>
              <li>Advanced JavaScript Concepts</li>
              <li>The modern Python bootcamp</li>
              <li>Ethical hacking from scratch</li>
              <li>Math with Python</li>
              <li>The Complete Junior to Senior Web Developer</li>
              <li>Electronics for Beginners</li>
            </ul>
          </div>
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-12">
            <h1 className="intro">{aboutMe.books}</h1>

            <ul>
              <li>
                Clean Code: A Handbook of Agile Software Craftsmanship 1st
                Edition by Robert C. Martin
              </li>
              <li>
                Designing Data-Intensive Applications: The Big Ideas Behind
                Reliable, Scalable, and Maintainable Systems By Martin Kleppmann
              </li>
            </ul>
          </div>
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-12">
            <h1 className="intro">{aboutMe.languages}</h1>
            <ul>
              {LANG_ARRAY.map((l: string, i: number) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
