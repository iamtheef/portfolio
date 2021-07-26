import { generateDigits } from "./generateDigits";
import React from "react";

const defaultLines = () => {
  return Math.ceil(document.getElementById("root")?.scrollHeight! / 46);
};

const linesPerHash: any = {
  contact: 13,
};

const cuclulateLines = () => {
  const hash = window.location.hash.slice(2);
  return !!linesPerHash[hash] ? linesPerHash[hash] : defaultLines();
};

export const makeTable = () => {
  let lines: number = cuclulateLines();

  console.log(lines);
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
