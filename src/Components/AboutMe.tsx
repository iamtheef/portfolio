import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import CVpic from "../assets/me.jpg";

const About: React.FC = () => {
  const { isGreek } = useContext(LanguageContext);
  return (
    <div>
      <div className="container paragraph marginTop">
        <div className="row">
          <div className="col-10">
            <h1 className="intro">{isGreek() ? "ΠΡΟΦΙΛ" : "PROFILE"}</h1>
            <ul>
              <li>
                {isGreek() ? (
                  <p>
                    Full-stack developer με προτίμηση στο back-end. Μου αρέσουν
                    οι άνθρωποι που χαμογελούν και έχουν χιούμορ, τα παζλς και
                    οι γρίφοι και πιστεύω ότι ο προγραμματισμός ειναι ένας πιό
                    κομψός τρόπος να λύνεις προβλήματα. Στον ελεύθερο μου χρόνο
                    μου αρέσει να γράφω ηλεκτρονική μουσική.
                  </p>
                ) : (
                  <p>
                    I am a full-stack web developer with a preference for the
                    back-end. I am quite humorous and I like people who smile
                    and are open. Generally I love solving puzzles etc and I
                    think programming is just that in a more elegant and
                    professional level. Ι like electronic music and I try to
                    produce when I have some spare time.
                  </p>
                )}
              </li>
            </ul>
          </div>

          <img
            src={CVpic}
            className="col-2 d-lg-block d-none pic"
            alt="the ugly guy"
          />
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <h1 className="intro">
            {isGreek() ? "ΕΡΓΑΣΙΑΚΗ ΕΜΠΕΙΡΙΑ" : "WORK EXPERIENCE"}
          </h1>
          <div className="col-12">
            <ul>
              <li>
                {isGreek() ? (
                  <p>
                    Έχω αναλάβει διάφορα αυτοσχέδια projects και όλα από αυτά
                    έχουν ολοκληρωθεί επιτυχώς μέχρι στιγμής. Ένας κλώνος του
                    reddit, μία εφαρμογή παρόμοια με το WhatsApp με
                    αυτοκαταστρεφόμενα μηνύματα και AES κρυπτογράφηση, ένα
                    πλήρης λειτουργικό GraphQL API σε SQL/NoSQL εκδόσεις, και
                    ένα μοντέλο AI που μπορεί να αναγνωρίσει ζώα είναι μερικά
                    από αυτά. Θέλω να δοκιμάζω διαρκώς καινούρια πράγματα,
                    τελευταίες τεχνολογίες, να συμμετέχω σε ομάδες με μεγαλύτερα
                    projects και πάντα να μαθαίνω και να αναπτύσσω καινούριες
                    δεξιότητες.
                  </p>
                ) : (
                  <p>
                    I 've been assigned several tasks for the last two years and
                    all of them have been successfully completed. A reddit
                    clone, a WhatsApp like app with trial messages and AES
                    encryption, a fully functional GraphQL API in SQL/NoSQL
                    versions and an AI model trained to recognise cats and dogs
                    to mention a few. I am always eager to be involved in new
                    things, contribute to team work and always to expand my
                    knowledge and skills for as much as I can. I am interested
                    in the AI sector and I am currently in an entry level.
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="row" style={{ marginTop: "5rem" }}>
          <h1 className="intro">
            {isGreek() ? "ΔΕΞΙΟΤΗΤΕΣ ΚΑΙ ΤΕΧΝΟΓΝΩΣΙΑ" : "SKILLS & KNOWLEDGE"}
          </h1>
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
                  <li>React/Next.js</li>
                  <li>GraphQL</li>
                  <li>Rest API Design</li>
                  <li>Node</li>
                  <li>
                    Relational/Document-oriented Databases (PostgreSQL/MongoDB)
                  </li>
                  <li>HTML/CSS + several frameworks (bootstrap etc.)</li>
                  <li>Python</li>
                </ul>

                <li className="mt-3">Secondary</li>
                <ul>
                  <li>SEO & Performance optimization techniques</li>
                  <li>Analytical and problem solving abilities</li>
                  <li>Strong debugging skills</li>
                  <li>Testing</li>
                  <li>BASH scripting</li>
                  <li>Java</li>
                  <li>C + C#</li>
                </ul>

                <li className="mt-3">Tools:</li>
                <ul>
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

        <div className="row col-12" style={{ marginTop: "5rem" }}>
          <div className="col-12">
            <h1 className="intro">{isGreek() ? "ΕΚΠΑΙΔΕΥΣΗ" : "EDUCATION"}</h1>
          </div>
          <div>
            {isGreek()
              ? "Έχω παρακολουθήσει πάνω από 350 ωρες στο Udemy και κατέχω τα παρακάτω πιστοποιητικά: "
              : "Total time spend on lectures on Udemy is over 350 hours and I have successfully obtained the certificates below:"}
          </div>

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
          <h1 className="intro">{isGreek() ? "BIBΛΙΑ" : "ΒΟΟΚS"}</h1>
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
          <h1 className="intro">{isGreek() ? "ΓΛΩΣΣΕΣ" : "LANGUAGES"}</h1>
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
    </div>
  );
};
export default About;
