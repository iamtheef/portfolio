import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import CVpic from "../assets/me.jpg";

const About: React.FC = () => {
  const { isGreek } = useContext(LanguageContext);
  return (
    <div className="container paragraph" style={{ marginTop: "-2050px" }}>
      <div className="row">
        <div className="col-10">
          <h1>{isGreek() ? "ΠΡΟΦΙΛ" : "PROFILE"}</h1>
          <ul>
            <li>
              {isGreek() ? (
                <p>
                  Είμαι full-stack developer αλλά συνήθως βρίσκω το back-end πιο
                  ενδιαφέρον. Μου αρέσουν οι άνθρωποι που χαμογελούν και έχουν
                  χιούμορ, τα παζλς και οι γρίφοι και πιστεύω ότι ο
                  προγραμματισμός ειναι ένας πιό κομψός τρόπος να λύνεις
                  προβλήματα. Στον ελεύθερο μου χρόνο μου αρέσει να γράφω
                  ηλεκτρονική μουσική.
                </p>
              ) : (
                <p>
                  I am a full-stack web developer with strong preference to the
                  back-end. I am quite humorous and I like people who smile and
                  are open. Generally I love solving puzzles etc and I think
                  programming is just that in a more elegant and professional
                  level. Ι like electronic music and I try to produde when I
                  have some spare time.
                </p>
              )}
            </li>
          </ul>
        </div>
        <img
          src={CVpic}
          className="col-2 d-lg-block d-none"
          alt="the ugly guy"
        />
      </div>

      <div className="row" style={{ marginTop: "5rem" }}>
        <h1>{isGreek() ? "ΕΡΓΑΣΙΑΚΗ ΕΜΠΕΙΡΙΑ" : "WORK EXPERIENCE"}</h1>
        <div className="col-12">
          <ul>
            <li>
              {isGreek() ? (
                <p>
                  Έχω αναλάβει διάφορα αυτοσχέδια projects και όλα από αυτά
                  έχουν ολοκληρωθεί επιτυχώς μέχρι στιγμής. Δεν έχω επίσημη
                  προϋπηρεσία αλλά θέλω να δοκιμάζω καινούρια πράγματα,
                  τελευταίες τεχνολογίες, να συμμετέχω σε ομάδες με μεγαλύτερα
                  projects και πάντα να μαθαίνω και να αναπτύσσω καινούριες
                  δεξιότητες. Με ενδιαφέρει ο τομέας του AI και σκοπεύω να
                  επεκταθώ και να ασχοληθώ με αυτό με την πρώτη ευκαιρία.
                </p>
              ) : (
                <p>
                  I 've given myself several tasks for the last two years and
                  all of them have been successfully completed. I have no formal
                  work experience but I am willing to try out new things,
                  contribute to team work and always to expand my knowledge and
                  skills for as much as I can. I am interested in the AI sector
                  and I plan to engage as soon as possible.
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
            <ul style={{ marginLeft: "-30px", fontSize: "19px" }}>
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
              <li>The Web Developer Bootcamp</li>
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
        <h1>{isGreek() ? "BIBΛΙΑ" : "ΒΟΟΚS"}</h1>
        <div className="col-12">
          <ul>
            <ul style={{ marginLeft: "-30px" }}>
              <li>
                Clean Code: A Handbook of Agile Software Craftsmanship 1st
                Edition by Robert C. Martin
              </li>
              <li>
                Designing Data-Intensive Applications: The Big Ideas Behind
                Reliable, Scalable, and Maintainable Systems By Martin Kleppmann
              </li>
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
