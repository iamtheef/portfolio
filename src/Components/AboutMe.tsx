import React, { useState, useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const About: React.FC = () => {
  const { isGreek } = useContext(LanguageContext);
  return (
    <div className="container paragraph" style={{ marginTop: "-1550px" }}>
      <div className="row">
        <h1>{isGreek() ? "ΕΡΓΑΣΙΑΚΗ ΕΜΠΕΙΡΙΑ" : "WORK EXPERIENCE"}</h1>
        <div className="col-12">
          <ul>
            <li>
              {isGreek() ? (
                <p>
                  Έχω αναλάβει διάφορα αυτοσχέδια projects και όλα απο αυτά
                  έχουν ολοκληρωθεί επιτυχώς μέχρι στιγμής. Δεν έχω επίσημη
                  προυπηρεσία αλλά θέλω να δοκιμάζω καινούρια πράγματα,
                  τελευταίες τεχνολογίες, να συμμετεχώ σε ομάδες με μεγαλύτερα
                  projects και πάντα να μαθαίνω και να αναπτύσω καινούριες
                  δεξιότητες.
                </p>
              ) : (
                <p>
                  I 've given myself several tasks for the last two years and
                  all of them have been succesfully completed. I have no formal
                  work exprerience but I am willing to try out new things,
                  contribute to team work and always to expand my knowledge and
                  skills for as much as I can.
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="row" style={{ marginTop: "5rem" }}>
        <h1>
          {isGreek() ? "ΔΕΞΙΟΤΗΤΕΣ ΚΑΙ ΤΕΧΝΟΓΝΩΣΙΑ" : "SKILLS & KNOWLEDGE"}
        </h1>
        <div className="col-12">
          <ul>
            <ul style={{ marginLeft: "-30px" }}>
              <li>TypeScript/JavaScript</li>
              <li>ReactJS</li>
              <li>GraphQL/Rest API Design</li>
              <li>SQL/MongoDB </li>
              <li>HTML/CSS + several frameworks (bootstrap etc.)</li>
              <li>Testing</li>
              <li>Basic BASH scripting</li>
              <li>Entry level Python & Java</li>
              <li>Good understanding of C</li>
              <li>Tools:</li>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>Redis</li>
                <li>Docker</li>
                <li>Jest</li>
                <li>Git</li>
              </ul>
            </ul>
          </ul>
        </div>
      </div>

      <div className="row" style={{ marginTop: "5rem" }}>
        <h1>{isGreek() ? "ΕΚΠΑΙΔΕΥΣΗ" : "EDUCATION"}</h1>
        <p>
          {isGreek()
            ? "Έχω παρακολουθήσει πάνω απο 280 ωρες στο Udemy και εχω ολοκληρώσει επιτυχώς τα παρακάτω courses:"
            : "Total time spend on lectures on Udemy is over 280 hours and I have succesfully obtained the certificates below:"}
        </p>
        <div className="col-12">
          <ul>
            <ul style={{ marginLeft: "-30px" }}>
              <li>The Web Developer BootCamp</li>
              <li>The complete web developer course 2.0</li>
              <li>Advanced JavaScript Concepts</li>
              <li>The Modern React Bootcamp</li>
              <li>JavaScript Algorithms & Data Structures Masterclass</li>
              <li>The Complete Junior to Senior Web Developer</li>
              <li>Electronics for Beginners</li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="row" style={{ marginTop: "5rem" }}>
        <h1>{isGreek() ? "ΓΛΩΣΣΕΣ" : "LANGUAGES"}</h1>

        <div className="col-12">
          <ul>
            <ul style={{ marginLeft: "-30px" }}>
              <li>{isGreek() ? "Ελληνικά" : "Greek"}</li>
              <li>{isGreek() ? "Αγγλικά" : "English"}</li>
              <li>
                {isGreek()
                  ? "Λίγα Γαλλικά και Ιταλικά"
                  : "Basic French and Italian"}
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
