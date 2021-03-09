import { generateDigits } from "./generateDigits";
import React from "react";

let linesPerHash: any = {
  experience: 105,
  about: 65,
  contact: 10,
};

export const makeTable = () => {
  const hash = window.location.hash.slice(2);
  let lines: number = linesPerHash[hash] || 15; // 7 is the default number

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
