import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import CVpic from "../assets/me.jpg";
// import CVpic from "../assets/me2.jpeg";

const About: React.FC = () => {
  const { getContent, getTags } = useContext(LanguageContext);
  const { PROFILE, WORK_EXP, EDUCATION, LANG_ARRAY } = getContent();
  const { aboutMe } = getTags();

  return (
    <div>
      <div className="container paragraph marginTop">
        <div className="row">
          <div className="col-10">
            <h1 className="intro">{getTags().aboutMe.profile}</h1>
            <ul>
              <li>{<p>{PROFILE}</p>}</li>
            </ul>
          </div>

          <img
            src={CVpic}
            style={{ marginTop: "50px" }}
            className="col-2 d-lg-block d-none"
            alt="the ugly guy"
          />
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <h1 className="intro">{aboutMe.experience}</h1>
          <div className="col-12">
            <ul>
              <li>{WORK_EXP}</li>
            </ul>
          </div>
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <h1 className="intro">{aboutMe.skills}</h1>
          <div className="col-12">
            <ul>
              <ul
                style={{
                  marginLeft: "-30px",
                  fontSize: "23px",
                }}
              >
                <li className="mt-3">Primary</li>
                <ul>
                  <li>TypeScript/JavaScript</li>
                  <li>Python</li>
                  <li>React/Next.js</li>
                  <li>GraphQL</li>
                  <li>Rest API Design</li>
                  <li>Node</li>
                  <li>Flask</li>
                  <li>SQL/NoSQL Databases (PostgreSQL/MongoDB)</li>
                  <li>HTML/CSS + several frameworks (bootstrap etc.)</li>
                </ul>

                <li className="mt-3">Secondary</li>
                <ul>
                  <li>SEO & Performance optimization techniques</li>
                  <li>Web scraping</li>
                  <li>Analytical and problem solving abilities</li>
                  <li>Strong debugging skills</li>
                  <li>Testing</li>
                  <li>BASH scripting</li>
                </ul>

                <li className="mt-3">Tools:</li>
                <ul>
                  <li>Express</li>
                  <li>Web sockets</li>
                  <li>Redis</li>
                  <li>Docker</li>
                  <li>Jest</li>
                  <li>Git</li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>

        <div className="row col-12" style={{ marginTop: "5rem" }}>
          <div className="col-12">
            <h1 className="intro">{aboutMe.education}</h1>
          </div>
          <div>{EDUCATION}</div>

          <div className="col-12">
            <ul>
              <ul style={{ marginLeft: "-30px" }}>
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
            </ul>
          </div>
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <h1 className="intro">{aboutMe.books}</h1>
          <div className="col-12">
            <ul>
              <ul style={{ marginLeft: "-30px" }}>
                <li>
                  Clean Code: A Handbook of Agile Software Craftsmanship 1st
                  Edition by Robert C. Martin
                </li>
                <li>
                  Designing Data-Intensive Applications: The Big Ideas Behind
                  Reliable, Scalable, and Maintainable Systems By Martin
                  Kleppmann
                </li>
              </ul>
            </ul>
          </div>
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <h1 className="intro">{aboutMe.languages}</h1>
          <div className="col-12">
            <ul>
              <ul style={{ marginLeft: "-30px" }}>
                {LANG_ARRAY.map((l: string, i: number) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
