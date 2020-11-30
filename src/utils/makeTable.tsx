import { generateDigits } from "./generateDigits";
import React from "react";

let linesPerHash: any = {
  experience: Math.floor(document.documentElement.clientHeight / 17) + 2,
  about: Math.floor(document.documentElement.clientHeight / 23),
  contact: Math.floor(document.documentElement.clientHeight / 100),
  default: Math.floor(document.documentElement.clientHeight / 100) + 2,
};

export const makeTable = () => {
  const hash = window.location.hash.slice(2);
  let lines: number = linesPerHash[hash] | linesPerHash["default"];
  console.log(linesPerHash[hash]);
  const newTable: any = [];

  for (let i = 0; i < lines; i++) {
    newTable.push(
      <div className="header col" key={i}>
        {generateDigits()}
      </div>
    );
  }
  return <div>{newTable}</div>;
};
