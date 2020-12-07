import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Link } from "react-router-dom";
import { sleep } from "../utils/sleep";

const Intro: React.FC = () => {
  const { getContent } = useContext(LanguageContext);
  const { HEADER, INTRO, ABOUT_ME_TAG } = getContent();
  const [text, setText] = useState<string>("");

  const helloFriend = async () => {
    let txt = "Hello, friend";
    for (let i = 0; i < txt.length; i++) {
      setText((prevText) => (prevText += txt.charAt(i)));
      if (txt.charAt(i) === ",") await sleep(150);
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
        </h1>
      </div>

      <div>
        <div className="intro">{HEADER}</div>
        <p className="paragraph" style={{ marginTop: "23px" }}>
          {INTRO}
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
            {ABOUT_ME_TAG}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Intro;
