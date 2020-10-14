import { generateDigits } from "./generateDigits";
import React from "react";

export const makeTable = () => {
  let lines: number = 0;
  const hash = window.location.hash;
  if (hash === "#/experience" || hash === "#/about") {
    lines = Math.floor(document.documentElement.clientHeight / 20) + 2;
  } else {
    lines = Math.floor(document.documentElement.clientHeight / 100) + 2;
  }

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
