import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Link } from "react-router-dom";

const Intro: React.FC = () => {
  const { isGreek } = useContext(LanguageContext);

  return (
    <div className="container">
      <h1 className="hello marginTop">
        <span className="hello">Hello, friend</span>
        <span className="blink">_</span>
        <div id="hover-content">Maybe I should give you a name</div>
      </h1>

      {!isGreek() ? (
        <div>
          <div className="intro">Welcome. I am glad you want to know me.</div>
          <p className="paragraph" style={{ marginTop: "23px" }}>
            My name is Thergiakis Eftichios, I am a full-stack developer born
            and raised in the island of Crete in Greece. A resourceful,
            self-motivated web developer who is hard working and a quick
            learner. I am flexible as well as team orientated. I am currently
            seeking for a web developer role where my existing qualifications
            will add value to the outset, whilst I continue to further develop
            my knowledge in the sector. I am eager to expand on AI sector. More
            on
            <Link
              to="/about"
              className="col-sm navbar-button"
              style={{
                fontWeight: "bolder",
                fontSize: "25px",
                paddingLeft: "7px",
                paddingRight: "7px",
              }}
            >
              About Me
            </Link>
            section.
          </p>
        </div>
      ) : (
        <div>
          <div className="intro">
            Καλώς ήρθατε. Χαίρομαι που θέλετε να με γνωρίσετε.
          </div>

          <p className="paragraph" style={{ marginTop: "23px" }}>
            Ονομάζομαι Θεργιάκης Ευτύχιος, είμαι full-stack developer έχω
            γενηθεί και μεγαλώσει στο νησί της Κρήτης στην Ελλάδα. Είμαι
            εφευρετικός, αυτοδίδακτος, εργατικός και μαθαίνω γρήγορα. Ευέλικτος
            και ομαδικός. Ψάχνω μία θέση στον τομέα ανάπτυξης εφαρμογών όπου οι
            δεξιότητες μου θα προσφέρουν στο τελικό αποτέλεσμα, καθώς θα μου
            επιτρέπει να επεκτείνω τις γνώσεις μου στον τομέα του software. Με
            ενδιαφέρει αρκετά και ο τομέας του AI. Περισσότερα στην σελίδα
            <Link
              to="/about"
              className="col-sm navbar-button"
              style={{
                fontWeight: "bolder",
                fontSize: "25px",
                paddingLeft: "7px",
                paddingRight: "7px",
              }}
            >
              Σχετικά με εμένα
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Intro;
