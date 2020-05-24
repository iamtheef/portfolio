import React from "react";

export function Intro() {
  return (
    <div className="container">
      <h1 className="hello">
        Hello, friend<span className="blink">_</span>
      </h1>

      <div className="intro">Welcome. I am glad you want to know me.</div>
      <p className="paragraph" style={{ marginTop: "23px" }}>
        My name is Thergiakis Eftichios, born and raised in the island of Crete
        in Greece. I am {new Date().getFullYear() - 1994} years old. A
        resourceful and self-taught web developer, who is hard working and a
        quick learner. I am flexible as well as team orientated. I am currently
        seeking for an engineering role where my existing expertise and
        qualifications will add value to the outset, whilst I continue to
        further develop my skills and knowledge in the software engineering
        sector. I am eager to expand to AI sector. More on{" "}
        <span style={{ fontWeight: "bolder", fontSize: "35px" }}>About Me</span>{" "}
        section.
      </p>
    </div>
  );
}

export default Intro;
