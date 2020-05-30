import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const Intro: React.FC = () => {
  const { isGreek } = useContext(LanguageContext);

  return (
    <div className="container">
      <h1 className="hello marginTop">
        Hello, friend<span className="blink">_</span>
      </h1>

      {!isGreek() ? (
        <div>
          <div className="intro">Welcome. I am glad you want to know me.</div>
          <p className="paragraph" style={{ marginTop: "23px" }}>
            My name is Thergiakis Eftichios, I am a full-stack developer born
            and raised in the island of Crete in Greece. A resourceful and
            self-taught web developer, who is hard working and a quick learner.
            I am flexible as well as team orientated. I am currently seeking for
            an engineering role where my existing expertise and qualifications
            will add value to the outset, whilst I continue to further develop
            my skills and knowledge in the software engineering sector. I am
            eager to expand on AI sector. More on{" "}
            <span style={{ fontWeight: "bolder", fontSize: "25px" }}>
              About Me
            </span>{" "}
            section.
          </p>
        </div>
      ) : (
        <div>
          <div className="intro">
            Καλως ήρθατε. Χαίρομαι που θέλετε να με γνωρίσετε.
          </div>
          <p className="paragraph" style={{ marginTop: "23px" }}>
            Ονομάζομαι Θεργιάκης Ευτύχιος, είμαι full-stack developer έχω
            γενηθεί και μεγαλώσει στο νησί της Κρήτης στην Ελλάδα. Είμαι{" "}
            {new Date().getFullYear() - 1994} χρονών. Είμαι εφευρετικός,
            αυτοδίδακτος, εργατικός και μαθαίνω γρήγορα. Ευέλικτος και ομαδικός.
            Ψάχνω μία θέση στον τομέα ανάπτυξης εφαρμογών όπου η εμπειρία και οι
            δεξιότητες μου θα προσφέρουν στο τελικό αποτέλεσμα, καθώς θα μου
            επιτρέπει να επεκτείνω τις δυνατότητες και τις γνώσεις μου στον
            τομέα του software. Με ενδιαφέρει αρκετά και ο τομέας του AI.
            Περισσότερα στην σελίδα{" "}
            <span style={{ fontWeight: "bolder", fontSize: "25px" }}>
              Σχετικά με εμένα.
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Intro;
