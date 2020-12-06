import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Link } from "react-router-dom";
import { sleep } from "../utils/sleep";

const Intro: React.FC = () => {
  const { isGreek } = useContext(LanguageContext);
  const [text, setText] = useState<string>("");

  const helloFriend = async () => {
    let txt = "Hello, friend";
    for (let i = 0; i < txt.length; i++) {
      setText((prevText) => (prevText += txt.charAt(i)));
      await sleep(120);
    }
  };

  useEffect(() => {
    helloFriend();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="marginTop">
        <h1 className="hello">
          {text}
          <span className="blink">_</span>
          <span id="hover-content">Maybe I should give you a name</span>
        </h1>
      </div>

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
